import Header from './../components/header/Header';
import './Home.css';

const Home = () => {
	return (
		<>
			<Header />
			<main className="section">
				<div className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">Frontend</h2>
							<div className='info'>
								<div>
									<p>JavaScript</p>
									<div class="progress">
										<div class="progress-value" id='n1'></div>
									</div>
								</div>
								<div>
									<p>TypeScript</p>
									<div class="progress">
										<div class="progress-value" id='n2'></div>
									</div>
								</div>
								<div>
									<p>ReactJS</p>
									<div class="progress">
										<div class="progress-value" id='n3'></div>
									</div>
								</div>
								<div>
									<p>HTML</p>
									<div class="progress">
										<div class="progress-value" id='n4'></div>
									</div>
								</div>
								<div>
									<p>CSS</p>
									<div class="progress">
										<div class="progress-value" id='n5'></div>
									</div>
								</div>
								<div>
									<p>StyledComponents</p>
									<div class="progress">
										<div class="progress-value" id='n6'></div>
									</div>
								</div>	
							</div>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Backend</h2>
							<div className='info'>
								<div>
									<p>NodeJS</p>
									<div class="progress">
										<div class="progress-value" id='n7'></div>
									</div>
								</div>
								<div>
									<p>MySQL</p>
									<div class="progress">
										<div class="progress-value" id='n8'></div>
									</div>
								</div>
								<div>
									<p>PHP</p>
									<div class="progress">
										<div class="progress-value" id='n9'></div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
}

export default Home;