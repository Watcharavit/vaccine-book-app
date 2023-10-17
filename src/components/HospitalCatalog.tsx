import ProductCard from "@/components/ProductCard"
import Link from "next/link";

interface HospitalsObjectProps {
    _id : string
	name: string
	address: string
	district: string
	province: string
    postalcode:string
    tel: string
    picture: string
}

export default async function HospitalCatalog({hospitals}:{hospitals:Promise<any>}){
    const hospitalsReady = await hospitals;
    const hospitalsData: HospitalsObjectProps[] = hospitalsReady.data;
    return(
        <>
        	<div className="m-4 justify-around items-center flex flex-row flex-wrap">
				{
					hospitalsData.map((hospitalItem)=>(
						<Link href={`/hospital/${hospitalItem._id}`} className="w-1/4">
						<ProductCard
						name={hospitalItem.name}
						img_path={hospitalItem.picture}
						/>
						</Link>
					))
				}
			</div>
        </>
    )
}