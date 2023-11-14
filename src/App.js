import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";
import { useState } from 'react';


function App() {
	const [id,setId] = useState(0);
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects id={id} setId={setId}/>} />
					<Route path="/project" element={<Project id={id}/>} />
					<Route path="/contacts" element={<Contacts />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
