

import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import data from '../data.json';
import { useState } from 'react';

const Project = ({ id }) => {

	const [items] = useState(data);

	return (
		<main className="section">
			<div className="container">
				<div className="project-details">
					{items.map((item) => {
						if (item["id"] == id)
							return (
								<div>
									<h1 className="title-1">{item["title"]}</h1>

									<img
										src={item["imgBig"]}
										alt={item["title"]}
										className="project-details__cover"
									/>

									<div className="project-details__desc">
										<p>Skills: {item["skills"]}</p>
									</div>

									{item["gitHubLink"] && (
										<BtnGitHub link="https://github.com" />
									)}
								</div>
							)
					})}
				</div>
			</div>
		</main>
	);
}

export default Project;