import { Link, useLocation } from 'react-router';

import './Topbar.scss';

const Topbar: React.FC = () => {
	const location = useLocation();
	
	return (
		<div className={'topbar'} data-nosnippet>
			<div className={'left'}>
				<p className={'title'}>Project LIGAYA</p>
			</div>
			<div className={'right'}>
				<div className={'link'}>
					<Link to={'/'} className={location.pathname === '/' ? 'active' : ''}>
						<span>What is Project LIGAYA?</span>
					</Link>
				</div>
				<div className={'link'}>
					<Link to={'/mission'} className={location.pathname === '/mission' ? 'active' : ''}>
						<span>Our Mission <span className={'material-symbols-outlined'}>arrow_drop_down</span></span>
					</Link>
					<div className={'dropdown'}>
						<div className={'items'}>
							<div className={'link'}>
								<Link to={'/who'} className={location.pathname === '/who' ? 'active' : ''}>
									<span>Who are we?</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
				{/* <div className={'link'}>
					<Link to={'/journey'} className={location.pathname === '/journey' ? 'active' : ''}>
						<span>Our Journey</span>
					</Link>
				</div> */}
			</div>
		</div>
	);
}

export default Topbar;
