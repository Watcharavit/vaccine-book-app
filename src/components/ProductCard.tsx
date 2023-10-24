"use client";
import Image from "next/image";
import InteractiveCard from "./Interactive";
import { Rating } from "@mui/material";
import { useEffect, useState } from "react";

interface ProductCardProps {
	name: string;
	img_path: string;
	// changedReview: Function
	// resetRating: boolean
}

export default function ProductCard({ name, img_path /*changedReview, resetRating */ }: ProductCardProps) {
	// const [rating, setRating] = useState<number | null>(0)
	// useEffect(() => {
	// 	if (resetRating) {
	// 		setRating(0)
	// 	}
	// }, [resetRating])
	return (
		<InteractiveCard contentText={name}>
			<div className="w-auto h-[50%] relative rounded-t-lg">
				<Image src={img_path} alt="Product picture" fill={true} className="object-contain rounded-t-lg p-2" />
			</div>
			<div className="w-full h-[25%] p-2 text-center rounded-b-lg bg-sky-50 text-cyan-900">{name}</div>
			{/* <Rating
				name="controlled"
				precision={0.5}
				value={rating}
				onChange={(e, newValue) => {
					setRating(newValue)
					changedReview(newValue)

				}}
				onClick={(e)=> {		
					e.stopPropagation()
				}}
			/> */}
		</InteractiveCard>
	);
}
