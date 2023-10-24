import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookingItem } from "@/interface";

type BookingState = {
	bookItem: BookingItem | null;
};

const initialState: BookingState = { bookItem: null };
export const bookingSlice = createSlice({
	name: "booking",
	initialState,
	reducers: {
		addBooking: (state, action: PayloadAction<BookingItem>) => {
			state.bookItem = action.payload;
		},
		removeBooking: (state, action: PayloadAction<BookingItem>) => {
			state.bookItem = null;
		}
	}
});

export const {addBooking, removeBooking} = bookingSlice.actions
export default bookingSlice.reducer