// import Image from "next/image"
import Banner from "@/components/Banner"
import ProductCard from "@/components/ProductCard"
// import styles from "./page.module.css"

export default function Home() {
	return (
		<main>
			<Banner />
			<div className="m-4 justify-around items-center flex flex-row flex-wrap">
				<ProductCard text="Chulalongkorn Hospital" path="/img/chula.png" />
				<ProductCard text="Rajavithi Hospital" path="/img/rajavithi.png" />
				<ProductCard text="Thammasat University Hospital" path="/img/thammasat.png" />
			</div>
		</main>
	)
}
