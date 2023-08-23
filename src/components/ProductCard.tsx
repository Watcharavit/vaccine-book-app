import styles from "./productCard.module.css"
import Image from "next/image"

interface ProductCardProps {
	text: string
	path: string
}

export default function ProductCard({ text, path }: ProductCardProps) {
	return (
		<div className={styles.card}>
			<div className={styles.cardimg}>
				<Image src={path} alt="Product picture" fill={true} objectFit="cover" />
			</div>
			<div className={styles.cardtext}>{text}</div>
		</div>
	)
}
