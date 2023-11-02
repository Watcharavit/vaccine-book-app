import { dbConnect } from "@/db/dbConnect";
import Hospital from "@/db/models/Hospital";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { revalidateTag } from "next/dist/server/web/spec-extension/revalidate-tag";
import { redirect } from "next/navigation";
export default async function AddHospitalForm() {
	const session = await getServerSession(authOption);
	if (!session || !session.user.token) return null;
	const profile = await getUserProfile(session.user.token);
	if (profile.data.role != "admin") return <></>;

	const addHospital = async (AddHospitalForm: FormData) => {
		"use server";
		const name = AddHospitalForm.get("name");
		const address = AddHospitalForm.get("address");
		const district = AddHospitalForm.get("district");
		const province = AddHospitalForm.get("province");
		const postalcode = AddHospitalForm.get("postalcode");
		const tel = AddHospitalForm.get("tel");
		const picture = AddHospitalForm.get("picture");
		try {
			await dbConnect();
			const hospital = await Hospital.create({
				name: name,
				address: address,
				district: district,
				province: province,
				postalcode: postalcode,
				tel: tel,
				picture: picture
			});
		} catch (error) {
			console.log(error);
		}
		revalidateTag("hospitals");
		redirect("/hospital");
	};

	return (
		<form action={addHospital}>
			<div className="w-[100%] flex flex-col items-center">
				<div>Add Hospital</div>
				<div className="space-y-2 py-2">
					<input
						type="text"
						required
						name="name"
						id="name"
						autoComplete="name"
						className="block w-[200px] h-[2em] indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-400 "
						placeholder="name"
					/>
					<input
						type="text"
						required
						name="address"
						id="address"
						autoComplete="address"
						className="block w-[200px] h-[2em] indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-400 "
						placeholder="address"
					/>
					<input
						type="text"
						required
						name="district"
						id="district"
						autoComplete="district"
						className="block w-[200px] h-[2em] indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-400 "
						placeholder="district"
					/>
					<input
						type="text"
						required
						name="province"
						id="province"
						autoComplete="province"
						className="block w-[200px] h-[2em] indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-400 "
						placeholder="province"
					/>
					<input
						type="text"
						required
						name="postalcode"
						id="postalcode"
						autoComplete="postalcode"
						className="block w-[200px] h-[2em] indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-400 "
						placeholder="postalcode"
					/>
					<input
						type="text"
						required
						name="tel"
						id="tel"
						autoComplete="tel"
						className="block w-[200px] h-[2em] indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-400 "
						placeholder="tel"
					/>
					<input
						type="text"
						required
						name="picture"
						id="picture"
						autoComplete="picture"
						className="block w-[200px] h-[2em] indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-400 "
						placeholder="URL"
					/>
					<button className="bg-white border font-semibold py-2 px-2 m-2 rounded hover:bg-cyan-700 hover:text-white">Add hospital</button>
				</div>
			</div>
		</form>
	);
}
