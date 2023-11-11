import HospitalCatalog from "@/components/HospitalCatalog";
import { render, screen, waitFor } from "@testing-library/react";

const mockResult = {
	success: true,
	count: 4,
	pagination: {},
	data: [
		{
			_id: "652eaaba4c555c1debad63cc",
			name: "Chulalongkorn Hospital",
			address: "1873 Rama IV Rd",
			district: "Pathum Wan",
			province: "Bangkok",
			postalcode: "10330",
			tel: "026494000",
			picture: "https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
			id: "652eaaba4c555c1debad63cc"
		},
		{
			_id: "652eab3b4c555c1debad63cd",
			name: "Rajavithi Hospital",
			address: "2 Phaya Thai Rd, Thung Phaya Thai",
			district: "Ratchathewi",
			province: "Bangkok",
			postalcode: "10400",
			tel: "022062900",
			picture: "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
			id: "652eab3b4c555c1debad63cd"
		},
		{
			_id: "652eab924c555c1debad63ce",
			name: "Thammasat University Hospital",
			address: "95 Moo 8 Phaholyothin Frontage Rd, Khlong Nueng",
			district: "Khlong Luang",
			province: "Pathum Thani",
			postalcode: "12120",
			tel: "029269999",
			picture: "https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e",
			id: "652eab924c555c1debad63ce"
		},
		{
			_id: "654349d5967a5b91d568cfda",
			name: "Vajira Hospital",
			address: " 681 Samsen Road",
			district: "Dusit",
			province: "Bangkok",
			postalcode: "10300",
			tel: "022443000",
			picture: "https://drive.google.com/uc?id=1YLciRsApgCzbozEZQpnu_5hz5g0HsIwP",
			__v: 0,
			id: "654349d5967a5b91d568cfda"
		}
	]
};

describe("HospitalCatalog", () => {
	it("should have correct number of hospital", async () => {
		const hospitalsPromise = Promise.resolve(mockResult);
		const hospitalCatalog = await HospitalCatalog({ hospitals: hospitalsPromise });
		render(hospitalCatalog);

		await waitFor(() => {
			const hospitalImages = screen.queryAllByRole("img");
			expect(hospitalImages.length).toBe(4);
		});
	});
});
