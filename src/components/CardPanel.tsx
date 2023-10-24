"use client";
import { useReducer, useState } from "react";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function CardPanel() {
	const reveiwReducer = (reviewList: Map<string, number>, action: { type: boolean; hospitalName: string; value: number }) => {
		if (action.type) {
			reviewList.set(action.hospitalName, action.value);
			return new Map(reviewList);
		} else {
			reviewList.delete(action.hospitalName);
			return new Map(reviewList);
		}
	};
	const [reviewList, reviewDispatch] = useReducer(reveiwReducer, new Map<string, number>());
	const [resetHospital, setResetHospital] = useState<string | null>(null);
	// temp data
	const hospitalData = [
		{ hid: "001", name: "Chulalongkorn Hospital", image: "/img/chula.png" },
		{ hid: "002", name: "Rajavithi Hospital", image: "/img/rajavithi.png" },
		{ hid: "003", name: "Thammasat University Hospital", image: "/img/thammasat.png" }
	];
	return (
		<div>
			<div className="m-4 justify-around items-center flex flex-row flex-wrap">
				{hospitalData.map((hospitalItem) => (
					<Link href={`/hospital/${hospitalItem.hid}`} className="w-1/4">
						<ProductCard
							name={hospitalItem.name}
							img_path={hospitalItem.image}
							// changedReview={(newValue: number) => reviewDispatch({ type: true, hospitalName: hospitalItem.name, value: newValue })}
							// resetRating={resetHospital === hospitalItem.image}
						/>
					</Link>
				))}
			</div>
			<div className="w-full text-xl font-medium">Review List</div>
			<ul className="mt-4">
				{Array.from(reviewList.entries()).map(([hospitalName, rating]) => (
					<li
						key={hospitalName}
						onClick={() => {
							reviewDispatch({ type: false, hospitalName: hospitalName, value: 0 });
							setResetHospital(hospitalName);
						}}
					>
						{hospitalName}: {rating} star(s)
					</li>
				))}
			</ul>
		</div>
	);
}
