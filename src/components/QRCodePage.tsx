import { useEffect, useRef, useState } from 'react';

import QrCode from 'qrcode-with-logos';

import './QRCodePage.scss';

const urlContent = 'https://ph.projectligaya.org';

const QRCodePage: React.FC = () => {
	const [generated, setGenerated] = useState<boolean>(false);
	
	const imageRef = useRef<HTMLImageElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	
	useEffect(() => {
		const image = imageRef.current;
		const canvas = canvasRef.current;
		if (image === null || canvas === null) {
			return;
		}
		
		new QrCode({
			content: urlContent,
			width: 512,
			image: image,
			canvas: canvas,
			download: false,
			cornersOptions: {
				type: 'rounded',
				radius: { inner: 8, outer: 15 },
				color: 'hsl(40, 9%, 37%)',
			},
			dotsOptions: {
				type: 'fluid',
				color: 'hsl(40, 9%, 57%)',
			},
		});
		
		setGenerated(true);
	}, []);
	
	return (
		<main className={'qrCodePage'}>
			{!generated ? (
				<p className={'url'}>Generating QR code...</p>
			) : (
				<p className={'url'}>{urlContent}</p>
			)}
			<img className={'qrcode'} ref={imageRef} />
			<canvas style={{ display: 'none' }} ref={canvasRef} />
			{typeof navigator !== 'undefined' && !/(iPad)|(iPhone)|(iPod)/.test(navigator.userAgent) && (
				<button
					className={'download'}
					onClick={() => {
						const canvas = canvasRef.current;
						if (!canvas) {
							return;
						}
						
						canvas.toBlob(async (blob) => {
							if (blob === null) {
								alert('Failed to download QR code');
								return;
							}
							
							try {
								const clipboardItem = new ClipboardItem({
									'image/png': blob,
								});
								
								await navigator.clipboard.write([clipboardItem]);
								alert('Copied to clipboard!');
							} catch (err) {
								console.warn('Failed to copy to clipboard:', err);
								alert(`Failed to copy to clipboard ${navigator.userAgent}`);
							}
						});
					}}
				>
					Copy to clipboard
				</button>
			)}
			<button
				className={'download'}
				onClick={() => {
					const canvas = canvasRef.current;
					if (!canvas) {
						return;
					}
					
					canvas.toBlob((blob) => {
						if (blob === null) {
							alert('Failed to download QR code, please try again');
							return;
						}
						
						const href = URL.createObjectURL(blob);
						
						const link = document.createElement('a');
						link.download = 'ProjectLigayaQRCode.png';
						link.href = href;
						document.body.appendChild(link);
						
						link.click();
						
						document.body.removeChild(link);
						URL.revokeObjectURL(href);
					});
				}}
			>
				Download as image
			</button>
		</main>
	);
}

export default QRCodePage;
