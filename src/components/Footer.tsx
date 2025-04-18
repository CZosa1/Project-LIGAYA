import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import InstagramLogo from '@/assets/instagram.svg';

import './Footer.scss';
import { Link } from 'react-router';

const siteKey = '6LfD5AwrAAAAABc8-gH89zqTtB4xiqUknEHCquGO';

const Footer: React.FC = () => {
	const [state, setState] = useState<'none' | 'loading' | 'verified'>('none');
	const [info, setInfo] = useState<{ office: { phone: string, email: string }, inquiries: { phone: string, email: string } } | null>(null);
	
	const onCaptchaChange = async (token: string | null) => {
		if (token === null) {
			return;
		}
		
		try {
			const response = await fetch('https://www.top-hat.net/api/ProjectLigaya/verify', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ token }),
			});
			
			const data = await response.json();
			if (response.ok) {
				setInfo(data);
				setState('verified');
				return;
			} else {
				alert('CAPTCHA failed or invalid');
			}
			
			setState('none');
		} catch (err) {
			console.warn('Failed to verify with ReCAPTCHA:', err);
		}
	};
	
	const hiddenText = '\u2022'.repeat(20);
	
	return (
		<>
			<div className={'spacer'} />
			<footer data-nosnippet>
				<section className={'left'}>
					<p className={'small'}>Office</p>
					<p className={'officePhone'}>Phone: <span>{info?.office.phone ?? hiddenText}</span></p>
					<p className={'officeEmail'}>E-Mail: <span>{info?.office.email ?? hiddenText}</span></p>
					<a className={'instagramLink'} target={'_blank'} href={'https://www.instagram.com/project._.ligaya'}>
						<img className={'logo'} src={InstagramLogo} />
						<p>project._.ligaya</p>
					</a>
					<Link to={'/qrcode'} className={'share'}>
						<span className={'material-symbols-outlined button'}>ios_share</span>
						<p>https://ph.projectligaya.org/</p>
					</Link>
				</section>
				<section className={'right'}>
					{state === 'none' ? (
						<ReCAPTCHA sitekey={siteKey} onChange={onCaptchaChange} />
					) : state === 'loading' ? (
						<p>Verifying...</p>
					) : null}
					<p>For speaking requests and inquiries, please contact:</p>
					<p className={'small'}>Ysabel Aquino</p>
					<p>Phone: <span>{info?.inquiries.phone ?? hiddenText}</span></p>
					<p className={'small'}>Georgine Malibiran</p>
					<p>E-Mail: <span>{info?.inquiries.email ?? hiddenText}</span></p>
				</section>
			</footer>
		</>
	);
}

export default Footer;
