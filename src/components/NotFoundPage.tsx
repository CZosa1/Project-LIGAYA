import { Link } from 'react-router';

import './NotFoundPage.scss';

const NotFoundPage: React.FC = () => {
	return (
		<main className={'notFoundPage'}	>
			<section className={'body'}>
				<h1>404 Not Found!</h1>
				<Link to={'/'} className={'back'}>
					<h2>Back to home page</h2>
				</Link>
			</section>
		</main>
	);
}

export default NotFoundPage;
