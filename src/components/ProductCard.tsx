// import styles from "./productCard.module.css"
import Image from "next/image"

interface ProductCardProps {
	text: string
	path: string
}

export default function ProductCard({ text, path }: ProductCardProps) {
	return (
		<div className="w-1/4 h-[30vh] rounded-lg shadow-lg border border-slate-300">
			<div className="w-auto h-[75%] relative rounded-t-lg">
				<Image src={path} alt="Product picture" fill={true} className="object-contain rounded-t-lg p-2" />
			</div>
			<div className="w-full h-[25%] p-2 text-center rounded-b-lg bg-sky-50 text-cyan-900">{text}</div>
		</div>
	)
}
