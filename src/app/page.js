import Link from "next/link";
import Image from "next/image";
import BBC from "./bbcObject.json";

export default function Home() {
	return (
		<>
			<div className='header' style={{textAlign: "center"}}>
				<h4 style={{margin: "0"}}>Barlow Research</h4>
				<h2 style={{marginTop: "0"}}> 2024 Business Banking Conference</h2>
			</div>

			<Link href='./agenda'>
				<div className='layout-btn'>Agenda</div>
			</Link>
			<Link href='./speakers'>
				<div className='layout-btn'>Speakers</div>
			</Link>

			<h3 style={{textAlign: "center"}}>Sponsors</h3>
			<div className='spons-contain'>
				{BBC.sponsors.map((item, index) => {
					return (
						<div className='spons-ch' key={index}>
							<a href={item.url}>
								<img src={item.image} />
							</a>
						</div>
					);
				})}
			</div>
		</>
	);
}
