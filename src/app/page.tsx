import Image from "next/image"
import Banner from "@/components/Banner"
import ProductCard from "@/components/ProductCard"
import styles from "./page.module.css"

export default function Home() {
	return (
		<main>
			<Banner />
			<div style={{ margin: "16px", justifyContent: "space-around", alignContent: "space-around", display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
				<ProductCard text="Modern technology allows vaccines, like those using mRNA, to be developed in just a year, a process that once took 10-15 years." path="/img/lab.jpg" />
				<ProductCard text="Vaccines not only protect individuals but, through herd immunity, also shield the community, including the vulnerable." path="/img/community.jpg" />
				<ProductCard text="From the first smallpox vaccine in 1796, we now have immunizations against over 25 diseases." path="/img/vaccine1.jpg" />
				<ProductCard text="Vaccines are rigorously tested in clinical trials, involving tens of thousands, before public approval." path="/img/vaccine2.jpg" />
			</div>
		</main>
	)
}
