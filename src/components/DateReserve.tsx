"use client"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

export default function DateReserve(){
    return(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
			<DatePicker className="bg-white" />
		</LocalizationProvider>
    )
}