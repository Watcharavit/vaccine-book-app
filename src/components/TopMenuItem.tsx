import Link from "next/link"
// import styles from "./topMenu.module.css"

export default function TopMenuItem({ title, path }: { title: string; path: string }) {
	return (
		<Link href={path} className="m-4 text-center font-sans text-sm text-gray-500 text-lg">
			{title}
		</Link>
	)
}
