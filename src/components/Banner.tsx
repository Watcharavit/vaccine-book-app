"use client"
import Image from "next/image"
import { useState } from "react"

export default function Banner() {
	const [index, setIndex] = useState(0)
	const cover = ["/img/vaccine-banner.jpg", "/img/lab.jpg", "/img/community.jpg", "/img/vaccine2.jpg"]
	const color = ["text-white", "text-black", "text-white", "text-black"]
	return (
		<div
			className="w-full h-[70vh] relative m-0 p-0 block"
			onClick={() => {
				setIndex(index + 1)
			}}
		>
			<Image src={cover[index % 4]} alt="cover" fill={true} priority objectFit="cover" />
			<div className="relative top-24 z-20 text-center text-white font-sans">
				<h1 className={`text-4xl ${color[index % 4]}`}>Vaccination</h1>
				<br></br>
				<h2 className={`text-2xl ${color[index % 4]}`}>The Shot of Hope for a Healthier Tomorrow"</h2>
			</div>
		</div>
	)
}
