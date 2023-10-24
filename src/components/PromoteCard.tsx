"use client";
import { useState } from "react";
import { VideoPlayer } from "./VideoPlayer";
import { useWindowListener } from "@/hooks/useWindowListener";

export function PromoteCard() {
	const [playing, setPlaying] = useState(true);
	useWindowListener("contextmenu", (e) => {
		e.preventDefault();
	});

	return (
		<div className="w-[80%] shadow-lg mx-[10%] my-5 p-2 rounded-lg bg-gray-300 flex flex-row p-5">
			<VideoPlayer vdoSrc="/video/getvaccine.mp4" isPlaying={playing} />
			<div className="mx-5">
				<div className="text-lg font-medium text-cyan">Get Your Vaccine Today</div>
				<button
					className="bg-white border font-semibold py-2 px-2 m-2 rounded z-30 hover:bg-cyan-700 hover:text-white"
					onClick={() => {
						setPlaying(!playing);
					}}
				>
					{playing ? "Pause" : "Play"}
				</button>
			</div>
		</div>
	);
}
