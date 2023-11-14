// import Project from '../components/project/Project';
// import {projects} from "./../helpers/projectsList"

// const Projects = () => {
// 	return (
// 		<main className="section">
// 			<div className="container">
// 				<h2 className="title-1">Projects</h2>
// 				<ul className="projects">
// 					{projects.map((project, index) => {
// 						return (
// 							<Project
// 								key={index}
// 								title={project.title}
// 								img={project.img}
// 								index={index}
// 							/>
// 						);
// 					})}
// 				</ul>
// 			</div>
// 		</main>
// 	);
// };

// export default Projects;



import { useState } from 'react';
import data from '../data.json';
import { NavLink } from 'react-router-dom';
import './Projects.css';

const Projects = ({ id, setId }) => {
	const [items] = useState(data);
	return (
		<main className="section">
			<div className="container">
				<h2 className="title-1">Projects</h2>
				<ul className="projects">
					{items.map((item) => (
						<NavLink to={`/project`}>
							<li className="project" onClick={() => setId(item["id"])}>
								<img src={item["img"]} className="project__img" alt='project' />
								<h3 className="project__title">{item["title"]}</h3>
							</li>
						</NavLink>
					))}
				</ul>
			</div>
		</main>
	);
};

export default Projects;
