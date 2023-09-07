"use client"
import React from "react"

export default function InteractiveCard({ children, contentText }: { children: React.ReactNode; contentText: string }) {
	// function onCardMouseAction(event: React.SyntheticEvent) {
	// 	if (event.type == "mouseover") {
	// 		event.currentTarget.classList.remove("shadow-lg")
	// 		event.currentTarget.classList.add("shadow-2xl")
	// 	} else {
	// 		event.currentTarget.classList.remove("shadow-2xl")
	// 		event.currentTarget.classList.add("shadow-lg")
	// 	}
	// }
	return <div className="w-1/4 h-[30vh] rounded-lg shadow-lg hover:shadow-2xl border border-slate-300 bg-white hover:bg-neutral-200">{children}</div>
}
