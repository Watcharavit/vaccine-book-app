// import styles from "./banner.module.css"
import Image from "next/image"
// import next from "next/types"

export default function Banner() {
	return (
		<div className="w-full h-[70vh] relative m-0 p-0 block">
			<Image src={"/img/vaccine-banner.jpg"} alt="cover" fill={true} priority objectFit="cover" />
			<div className="relative top-24 z-20 text-center text-white font-sans">
				<h1 className="text-4xl">Vaccination</h1>
				<br></br>
				<h2 className="text-2xl italic">The Shot of Hope for a Healthier Tomorrow"</h2>
			</div>
		</div>
	)
}
