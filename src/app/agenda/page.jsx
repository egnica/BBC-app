/* eslint-disable @next/next/no-img-element */
"use client";
import BBC from "../bbcObject.json";
import arrow from "../../images/down-arrow.svg";
import {useState} from "react";
import Link from "next/link";
import Image from "next/image";

const Agenda = () => {
	// window.onload = function () {
	// 	window.location.href =
	// 		"./BusinessBankingConference_2024/app-new/agenda.html";
	// };

	const [reveal, setReveal] = useState(0);

	const eventClick = (id) => {
		reveal != id ? setReveal(id) : setReveal(0);
	};

	const caretReveal = (decrip) => {
		return decrip ? (
			<Image className='caret' alt='caret' width={"25"} src={arrow} />
		) : (
			<span style={{width: "40px"}} />
		);
	};

	return (
		<>
			<div className='back-btn'>
				<Link href='/'>
					<p>back</p>
				</Link>
			</div>

			<h1>Agenda</h1>
			<h2>May 21</h2>

			<div>
				{BBC.event.map((item, index) => {
					return (
						<div key={index}>
							<div className='agenda-item'>
								{caretReveal(item.description)}
								<p onClick={() => eventClick(item.id)} key={item.id}>
									<strong>{item.time}</strong> {item.title}
								</p>
							</div>
							{reveal == item.id && (
								<div className='reveal-contain'>
									{item.description != "" && <p>{item.description}</p>}
									<div className='speaker-pic-contain'>
										{item.speakers.map((person, index) => {
											return (
												person.name != "" && (
													<>
														<Link
															key={index}
															href={{
																pathname: "speaker",
																query: {name: person.name, pageFrom: "agenda"},
															}}
														>
															<div className='speaker-pic-info' key={index}>
																<img alt={person.name} src={person.photo} />
																<p>{person.name}</p>
															</div>
														</Link>
													</>
												)
											);
										})}
									</div>
									{item.assets != "" && (
										<a href={item.assets}>
											<div className='assets-button'>View Slides</div>
										</a>
									)}
								</div>
							)}
						</div>
					);
				})}
			</div>
		</>
	);
};
export default Agenda;
