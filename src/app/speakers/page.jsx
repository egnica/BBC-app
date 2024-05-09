"use client";
import BBC from "../bbcObject.json";
import Link from "next/link";

const Speakers = () => {
	// window.onload = function () {
	// 	window.location.href =
	// 		"./BusinessBankingConference_2024/app-new/speakers.html";
	// };

	return (
		<>
			<div className='back-btn'>
				<Link href='/'>
					<p>back</p>
				</Link>
			</div>

			<h2>Speakers</h2>
			{BBC.event.map((item, index) => {
				return (
					<div key={item.id}>
						{item.speakers.map((person, pdex) => {
							return (
								person.name != "" && (
									<Link
										key={pdex}
										href={{
											pathname: "speaker",
											query: {name: person.name, pageFrom: "speakers"},
										}}
									>
										<div className='speaker-contain' key={pdex}>
											<img src={person.photo} />

											<div className='speaker-info'>
												<h3>{person.name}</h3>
												<p style={{margin: "0"}}>
													<strong>{person.company}</strong>
												</p>
												<p style={{margin: "0"}}>
													<em>{person.title}</em>
												</p>
											</div>
										</div>
									</Link>
								)
							);
						})}
					</div>
				);
			})}
		</>
	);
};
export default Speakers;
