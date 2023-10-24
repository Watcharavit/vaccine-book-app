"use client"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
import { removeBooking } from "@/redux/feature/bookSlice"

export default function BookingCart(){
    const bookItem = useAppSelector((state)=>state.bookSlice.bookItem)
    const dispatch = useDispatch<AppDispatch>()
    if (!bookItem) {
		return <div className="mx-8 my-5">No Vaccine Booking</div>
	}
    return (
        <div>
            <div className="bg-slate-200 rounded px-8 mx-8 py-5 my-5">
                <div className="text-md">First Name : {bookItem.firstName}</div>
                <div className="text-md">Last Name : {bookItem.lastName}</div>
                <div className="text-md">National ID : {bookItem.nationalID}</div>
                <div className="text-md">Hospital : {bookItem.hospital}</div>
                <div className="text-md">Vaccination Date: {bookItem.date}</div>
                <button className="bg-white border font-semibold py-2 px-2 m-2 rounded hover:bg-cyan-700 hover:text-white" onClick={()=>dispatch(removeBooking(bookItem))}>Remove reservation</button>
            </div>

        </div>
    )
}   