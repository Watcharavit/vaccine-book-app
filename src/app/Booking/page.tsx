"use client"
import { Select, MenuItem } from "@mui/material"
import { authOption } from "../api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import getUserProfile from "@/libs/getUserProfile"
import DateReserve from "@/components/DateReserve"
import dayjs, { Dayjs } from "dayjs"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { BookingItem } from "@/interface"
import { addBooking } from "@/redux/feature/bookSlice"
import { useSession } from "next-auth/react"
// import { useSearchParams } from "next/navigation"

export default function Booking() {
	// const session = await getServerSession(authOption)
	// if(!session || !session.user.token) return null
	// const profile = await getUserProfile(session.user.token)
	// var createdAt = new Date(profile.data.createdAt)
	const {data:session} = useSession()
	const [profile, setProfile] = useState<any>(null)
	const [firstName, setfirstName] = useState<string|null>("adsf")
	const [lastName, setlastName] = useState<string|null>("asdf")
	const [bookingDate, setBookingDate] = useState<Dayjs|null>(null)
	const [nationalID, setnationalID] = useState<string|null>(null)
	const [hospital, sethospital] = useState<string|null>(null)

	if (!session || !session.user.token) return null
	useEffect(() => {
		const fetchData = async () => {
			const profile = await getUserProfile(session.user.token)
			setProfile(profile)
		}
		fetchData()
	}, [])

	if (!profile) return <div className="mx-8 my-5">Profile is Loading ...</div>

	const dispatch = useDispatch<AppDispatch>()

	const makeBooking = () => {
		// console.log(firstName, lastName, nationalID, hospital, bookingDate)
		if (firstName && lastName && nationalID && hospital && bookingDate){
			const item:BookingItem = {
				firstName: firstName,
				lastName: lastName,
				nationalID: nationalID,
				hospital: hospital,
				date: dayjs(bookingDate).format("YYYY/MM/DD")
			}
			console.log(item)
			dispatch(addBooking(item))
		}
	}

	return (
		<main className="w-[100%] flex flex-col items-center">
			<div>Booking</div>
			
			<div className="space-y-2 py-2">
				{session? <div>Account : {profile.data.name}</div>:null}
				<input
					type="text"
					name="firstname"
					id="firstname"
					autoComplete="firstname"
					className="block w-[200px] h-[2em] indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-400 "
					placeholder="Your firstname"
					onChange={(e)=>{setfirstName(e.target.value)}}
				/>
				<input
					type="text"
					name="lastname"
					id="lastname"
					autoComplete="lastname"
					className="block w-[200px] h-[2em] indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-400 "
					placeholder="Your lastname"
					onChange={(e)=>{setlastName(e.target.value)}}
				/>
				<input
					type="text"
					name="nationalID"
					id="nationalID"
					autoComplete="number"
					className="block w-[200px] h-[2em] indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-400 "
					placeholder="Your national ID"
					onChange={(e)=>setnationalID(e.target.value)}
				/>
				<div>Select Hospital</div>
				<Select name="hospital" id="location" className="h-[2em]  w-[200px]" onChange={(e) => sethospital(e.target.value as string)}>
					<MenuItem value="CU">Chulalongkorn Hospital</MenuItem>
					<MenuItem value="RA">Rajavithi Hospital</MenuItem>
					<MenuItem value="TU">Thammasat University Hospital</MenuItem>
				</Select>
				<div> Vaccination Date </div>
				<DateReserve onDateChange={(value:Dayjs)=>{setBookingDate(value)}}/>
				<button className="bg-white border font-semibold py-2 px-2 m-2 rounded hover:bg-cyan-700 hover:text-white" onClick={makeBooking}>Make reservation</button>
			</div>
		</main>
	)
}
