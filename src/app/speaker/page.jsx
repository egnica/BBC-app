/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {useState, useEffect} from "react";
import BBC from "../bbcObject.json";
import Link from "next/link";

const Speaker = () => {
	// window.onload = function () {
	// 	window.location.href =
	// 		"./BusinessBankingConference_2024/app-new/speakers.html";
	// };

	const [person, setPerson] = useState([]);
	const [loading, setLoading] = useState(true);
	const [queryLocation, setGueryLocation] = useState();

	useEffect(() => {
		const fetchData = async () => {
			try {
				let query = window.location.search;
				const params = new URLSearchParams(query);
				const queryName = params.get("name");
				const queryLocation = params.get("pageFrom");
				setGueryLocation(queryLocation);
				BBC.event.forEach((element) => {
					element.speakers.forEach((person) => {
						if (person.name == queryName) {
							setPerson(person);
						}
					});
				});
				setLoading(false);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchData();
	}, []);

	const backButton = () => {
		if (queryLocation == "agenda") {
			return (
				<div className='back-btn'>
					<Link href='/agenda'>
						<p>back</p>
					</Link>
				</div>
			);
		} else if (queryLocation == "speakers") {
			return (
				<div className='back-btn'>
					<Link href='/speakers'>
						<p> back</p>
					</Link>
				</div>
			);
		} else {
			null;
		}
	};

	return (
		<>
			{loading ? <p>loading....</p> : <>{backButton()}</>}{" "}
			{loading ? (
				<p>loading....</p>
			) : (
				<div>
					<h2>{person.name}</h2>
					<img src={person.photo} />
					<p style={{margin: 0}}>
						<strong>{person.company}</strong>
					</p>
					<p style={{margin: 0}}>
						<em>{person.title}</em>
					</p>

					<p dangerouslySetInnerHTML={{__html: person.bio}} />
				</div>
			)}
		</>
	);
};
export default Speaker;
