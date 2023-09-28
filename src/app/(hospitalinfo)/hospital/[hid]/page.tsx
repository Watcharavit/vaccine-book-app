import Image from "next/image"

export default function HospitalDetail({params}:{params:{hid:string}}){
    // tmp data
    const hospitalData = new Map([
        ["001", { name: "Chulalongkorn Hospital", image: "/img/chula.png" }],
        ["002", { name: "Rajavithi Hospital", image: "/img/rajavithi.png" }],
        ["003", { name: "Thammasat University Hospital", image: "/img/thammasat.png" }],
    ]);

    const data = hospitalData.get(params.hid)
    return (
        <main className="text-center p-5"> 
            {data ? 
                <div className="flex flex-row my-5">
                    <Image src={data.image} 
                    alt="hospital image"
                    width={0} height={0} sizes="100vw" className="rounded-lg w-[30%]"/>
                    <div className="text-lg font-medium">{data.name}</div>
                </div>
             : 
                <div className="text-lg font-medium">Hospital not found</div>
            }
        </main>
    )
}