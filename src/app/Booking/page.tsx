import { Select, MenuItem } from "@mui/material"
import { authOption } from "../api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import getUserProfile from "@/libs/getUserProfile"
import DateReserve from "@/components/DateReserve"

export default async function Booking() {
	const session = await getServerSession(authOption)
	if(!session || !session.user.token) return null
	const profile = await getUserProfile(session.user.token)
	var createdAt = new Date(profile.data.createdAt)

	return (
		<main className="w-[100%] flex flex-col items-center">
			<div>Booking</div>
			
			<div className="space-y-2 py-2">
				{session?
				<div>Name: {profile.data.name}</div>
				:
				<input
					type="text"
					name="name"
					id="name"
					autoComplete="username"
					className="block w-[200px] h-[2em] indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-400 "
					placeholder="Your fullname"
				/>}
				<div>Email: {profile.data.email}</div>
				<div>Tel: {profile.data.tel}</div>
				<div>Member since: {createdAt.toString()}</div>
				<input
					type="text"
					name="nationalID"
					id="nationalID"
					autoComplete="number"
					className="block w-[200px] h-[2em] indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-400 "
					placeholder="Your national ID"
				/>
				<div>Select Hospital</div>
				<Select name="hospital" id="location" className="h-[2em]  w-[200px]">
					<MenuItem value="CU">Chulalongkorn Hospital</MenuItem>
					<MenuItem value="RA">Rajavithi Hospital</MenuItem>
					<MenuItem value="TU">Thammasat University Hospital</MenuItem>
				</Select>
				<div> Vaccination Date </div>
				<DateReserve/>
			</div>
		</main>
	)
}
