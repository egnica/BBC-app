import Link from "next/link";
import Image from "next/image";
import BBC from "./bbcObject.json";
import logo from "../images/Barlow_Black.png";

export default function Home() {
	return (
		<>
			<div className='header' style={{textAlign: "center", lineHeight: "1.2"}}>
				<a href='https://barlowresearch.com/index.php'>
					<Image
						alt='logo'
						src={logo}
						style={{maxWidth: "30%", height: "auto"}}
					/>
				</a>
				<h4 style={{margin: "0"}}>Barlow Research&apos;s</h4>
				<h2 style={{margin: "0"}}> 2024 Business Banking Conference</h2>
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
			<p>Questions?</p>
			<div style={{margin: "10px 20px"}}>
				<a href='mailto:cgarcia@barlowresearch.com'>
					<div className='layout-btn'>
						<p>Send email</p>
					</div>
				</a>
			</div>
		</>
	);
}
