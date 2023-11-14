import './Contacts.css';

const Contacts = () => {
	return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Contacts</h1>
				<form>
					<input name="name" type="text" class="feedback-input" placeholder="Name" />
					<input name="email" type="text" class="feedback-input" placeholder="Email" />
					<textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
					<input type="submit" value="SUBMIT"/>
				</form>

			</div>
		</main>
	);
}

export default Contacts;
