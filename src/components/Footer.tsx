import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import InstagramLogo from '@/assets/instagram.svg';

import './Footer.scss';

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
	
	return (
		<>
			<div className={'spacer'} />
			<footer>
				<section className={'left'}>
					<p>Office: {info?.office.phone ?? '*'.repeat(10)}</p>
					<p>{info?.office.email ?? '*'.repeat(10)}</p>
					<a className={'instagramLink'} href={'https://www.instagram.com/project._.ligaya'}>
						<img className={'logo'} src={InstagramLogo} />
					</a>
				</section>
				<section className={'right'}>
					{state === 'none' ? (
						<ReCAPTCHA sitekey={siteKey} onChange={onCaptchaChange} />
					) : state === 'loading' ? (
						<p>Verifying...</p>
					) : null}
					<p>For speaking requests and inquiries, please contact:</p>
					<p className={'small'}>Ysabel Aquino</p>
					<p>Phone: {info?.inquiries.phone ?? '*'.repeat(10)}</p>
					<p className={'small'}>Georgine Malibiran</p>
					<p>E-Mail: {info?.inquiries.email ?? '*'.repeat(10)}</p>
				</section>
			</footer>
		</>
	);
}

export default Footer;
