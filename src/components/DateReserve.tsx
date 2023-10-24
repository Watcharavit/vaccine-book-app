"use client"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Dayjs } from "dayjs"
import { useState } from "react"

export default function DateReserve({onDateChange}:{onDateChange:Function}){
    const [bookingDate, setBookingDate] = useState<Dayjs|null>(null)
    return(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
			<DatePicker className="bg-white" value={bookingDate} onChange={(value)=>{onDateChange(value); setBookingDate(value)}} />
		</LocalizationProvider>
    )
}