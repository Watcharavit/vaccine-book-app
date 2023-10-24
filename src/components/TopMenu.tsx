// import styles from "./topMenu.module.css"
import Image from "next/image"
import TopMenuItem from "./TopMenuItem"
import { getServerSession } from "next-auth"
import { authOption } from "@/app/api/auth/[...nextauth]/route"
import Link from "next/link"
export default async function TopMenu() {
	const session = await getServerSession(authOption)
	
	return (
		<div className="h-16 bg-white fixed top-0 left-0 right-0 z-30 border-t border-b border-gray-300 flex items-center justify-between">
			<div className="flex items-center">
			{
				session?<Link href="/api/auth/signout">
					<div className="m-4 text-center font-sans text-sm text-gray-500 text-lg">Sign Out</div> 
					</Link>
				:<Link href="/api/auth/signin">
					<div className="m-4 text-center font-sans text-sm text-gray-500 text-lg">Sign In</div> 
				</Link>
			}
			<TopMenuItem title="My booking" path="/mybooking" />
			</div>
			<div className="flex items-center">
			{
				session?<div className="m-4 text-center font-sans text-sm text-gray-500 text-lg">{session.user?.name}</div> 
				:<></>
			}
			<TopMenuItem title="Booking" path="/Booking" />
			<Image src={"/img/logo.png"} alt="logo" className="h-12 w-auto p-2" width={0} height={0} sizes="100vh"></Image>
			</div>
		</div>
	)
}
