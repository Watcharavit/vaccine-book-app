import Image from "next/image";
import getHospital from "@/libs/getHospital";

export default async function HospitalDetail({ params }: { params: { hid: string } }) {
	const hospitalResponse = await getHospital(params.hid);
	return (
		<main className="text-center p-5">
			{hospitalResponse.data ? (
				<div className="flex flex-row my-5">
					<Image src={hospitalResponse.data.picture} alt="hospital image" width={0} height={0} sizes="100vw" className="rounded-lg w-[30%]" />
					<div className="flex-cloumn text-left mx-5">
						<div className="text-lg font-medium">{hospitalResponse.data.name}</div>
						<div>Address: {hospitalResponse.data.address}</div>
						<div>District: {hospitalResponse.data.district}</div>
						<div>Province: {hospitalResponse.data.province}</div>
						<div>Postal Code: {hospitalResponse.data.postalcode}</div>
						<div>Telephone: {hospitalResponse.data.tel}</div>
					</div>
				</div>
			) : (
				<div className="text-lg font-medium">Hospital not found</div>
			)}
		</main>
	);
}
