// import styles from "./topMenu.module.css"
import Image from "next/image"
import TopMenuItem from "./TopMenuItem"

export default function TopMenu() {
	return (
		<div className="h-16 bg-white fixed top-0 left-0 right-0 z-30 border-t border-b border-gray-300 flex flex-row-reverse">
			<Image src={"/img/logo.png"} alt="logo" className="h-full w-auto p-2" width={0} height={0} sizes="100vh"></Image>
			<TopMenuItem title="Booking" path="/Booking" />
		</div>
	)
}
