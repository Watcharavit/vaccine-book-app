"use client";
import React from "react";

export default function InteractiveCard({ children, contentText }: { children: React.ReactNode; contentText: string }) {
	return <div className="w-full h-[30vh] rounded-lg shadow-lg hover:shadow-2xl border border-slate-300 bg-white hover:bg-neutral-200">{children}</div>;
}
