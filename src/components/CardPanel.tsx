"use client"
import { useReducer, useState } from "react"
import ProductCard from "@/components/ProductCard"

export default function CardPanel() {
	const reveiwReducer = (reviewList: Map<string, number>, action: { type: boolean; hospitalName: string; value: number }) => {
		if (action.type) {
			reviewList.set(action.hospitalName, action.value)
			return new Map(reviewList)
		} else {
			reviewList.delete(action.hospitalName)
			return new Map(reviewList)
		}
	}
	const [reviewList, reviewDispatch] = useReducer(reveiwReducer, new Map<string, number>())
	const [resetHospital, setResetHospital] = useState<string | null>(null)
	return (
		<div>
			<div className="m-4 justify-around items-center flex flex-row flex-wrap">
				<ProductCard
					name="Chulalongkorn Hospital"
					img_path="/img/chula.png"
					changedReview={(newValue: number) => reviewDispatch({ type: true, hospitalName: "Chulalongkorn Hospital", value: newValue })}
					resetRating={resetHospital === "Chulalongkorn Hospital"}
				/>
				<ProductCard
					name="Rajavithi Hospital"
					img_path="/img/rajavithi.png"
					changedReview={(newValue: number) => reviewDispatch({ type: true, hospitalName: "Rajavithi Hospital", value: newValue })}
					resetRating={resetHospital === "Rajavithi Hospital"}
				/>
				<ProductCard
					name="Thammasat University Hospital"
					img_path="/img/thammasat.png"
					changedReview={(newValue: number) => reviewDispatch({ type: true, hospitalName: "Thammasat University Hospital", value: newValue })}
					resetRating={resetHospital === "Thammasat University Hospital"}
				/>
			</div>
			<div className="w-full text-xl font-medium">Review List</div>
			<ul className="mt-4">
				{Array.from(reviewList.entries()).map(([hospitalName, rating]) => (
					<li
						key={hospitalName}
						onClick={() => {
							reviewDispatch({ type: false, hospitalName: hospitalName, value: 0 })
							setResetHospital(hospitalName)
						}}
					>
						{hospitalName}: {rating} star(s)
					</li>
				))}
			</ul>
		</div>
	)
}
