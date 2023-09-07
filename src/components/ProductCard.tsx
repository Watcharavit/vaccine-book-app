import Image from "next/image"
import InteractiveCard from "./Interactive"

interface ProductCardProps {
	text: string
	path: string
}

export default function ProductCard({ text, path }: ProductCardProps) {
	return (
		<InteractiveCard contentText={text}>
			<div className="w-auto h-[75%] relative rounded-t-lg">
				<Image src={path} alt="Product picture" fill={true} className="object-contain rounded-t-lg p-2" />
			</div>
			<div className="w-full h-[25%] p-2 text-center rounded-b-lg bg-sky-50 text-cyan-900">{text}</div>
		</InteractiveCard>
	)
}
