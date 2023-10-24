import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import React, { useState, useEffect } from "react";

export default function Hospital() {
	const hospitals = getHospitals();
	return (
		<main>
			<Suspense
				fallback={
					<p>
						Loading... <LinearProgress />
					</p>
				}
			>
				<HospitalCatalog hospitals={hospitals} />
			</Suspense>
		</main>
	);
}
