"use client"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem } from "@mui/material"

export default function Booking() {
	return (
		<main className="w-[100%] flex flex-col items-center ">
			<div>Booking</div>
			<div className="space-y-2 py-2">
				<input
					type="text"
					name="name"
					id="name"
					autoComplete="username"
					className="block w-[200px] h-[2em] indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-400 "
					placeholder="Your fullname"
				/>
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
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DatePicker className="bg-white" />
				</LocalizationProvider>
			</div>
		</main>
	)
}
