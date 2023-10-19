"use client"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

export default function Banner() {
	const [index, setIndex] = useState(0)
	const router = useRouter()
	const cover = ["/img/vaccine-banner.jpg", "/img/lab.jpg", "/img/community.jpg", "/img/vaccine2.jpg"]
	const color = ["text-white", "text-black", "text-white", "text-black"]
	const { data:session } = useSession()
	
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
			{
				session?<div className={`absolute top-6 right-2 z-20 text-lg ${color[index % 4]}`}>Hello {session.user?.name} </div>:null
			}
			<button className="bg-white border font-semibold py-2 px-2 m-2 rounded z-30 
			absolute bottom-0 right-0 hover:bg-cyan-700 hover:text-white" 
			onClick={(e)=>{e.stopPropagation();router.push("/hospital")}}>
			Select Hospital</button>
		</div>
	)
}
