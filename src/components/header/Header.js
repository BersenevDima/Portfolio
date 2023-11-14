import "./style.css";
import Snowfall from "react-snowfall";

const Header = () => {

	return (
		<header className="header">
			<Snowfall/>
			<div className="header__wrapper">
				<h1 className="header__title">
					<div class="typewriter">
						<h1>Freelance portfolio</h1>
					</div>
				</h1>
				<div className="header__text">
					<p>we work for food</p>
				</div>
			</div>
		</header>
	)

}

export default Header;