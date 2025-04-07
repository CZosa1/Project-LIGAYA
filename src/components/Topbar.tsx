import { Link, useLocation } from 'react-router';

import './Topbar.scss';

const Topbar: React.FC = () => {
	const location = useLocation();
	
	return (
		<div className={'topbar'}>
			<div className={'left'}>
				<p className={'title'}>Project LIGAYA</p>
			</div>
			<div className={'right'}>
				<Link to={'/'} className={location.pathname === '/' ? 'active' : ''}>
					<p>What is Project LIGAYA?</p>
				</Link>
				<Link to={'/mission'} className={location.pathname === '/mission' ? 'active' : ''}>
					<p>Our Mission</p>
				</Link>
				<Link to={'/journey'} className={location.pathname === '/journey' ? 'active' : ''}>
					<p>Our Journey</p>
				</Link>
			</div>
		</div>
	);
}

export default Topbar;
