import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import React from "react";
import AddHospitalForm from "@/components/AddHospitalForm";

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
				<AddHospitalForm />
			</Suspense>
		</main>
	);
}
