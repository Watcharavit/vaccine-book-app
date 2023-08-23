import styles from "./banner.module.css"
import Image from "next/image"
import next from "next/types"

export default function Banner() {
	return (
		<div className={styles.banner}>
			<Image src={"/img/vaccine-banner.jpg"} alt="cover" fill={true} priority objectFit="cover" />
			<div className={styles.bannerText}>
				<h1>Vaccination</h1>
				<br></br>
				<h2>"The Shot of Hope for a Healthier Tomorrow"</h2>
			</div>
		</div>
	)
}
