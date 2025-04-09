import { useEffect, useRef, useState } from 'react';

import QrCode from 'qrcode-with-logos';

import './QRCodePage.scss';

const urlContent = 'https://ph.projectligaya.org';

const QRCodePage: React.FC = () => {
	const [generated, setGenerated] = useState<boolean>(false);
	
	const canvasRef = useRef<HTMLCanvasElement>(null);
	
	useEffect(() => {
		const canvas = canvasRef.current;
		if (canvas === null) {
			return;
		}
		
		new QrCode({
			content: urlContent,
			width: 512,
			canvas: canvas,
			download: false,
			cornersOptions: {
				type: 'rounded',
			},
			dotsOptions: {
				type: 'fluid',
			},
		});
		
		setGenerated(true);
	}, []);
	
	return (
		<main className={'qrCodePage'}>
			{!generated ? (
				<p>Generating QR code...</p>
			) : (
				<p>{urlContent}</p>
			)}
			<canvas className={'qrcode'} ref={canvasRef} />
			<button
				className={'download'}
				onClick={() => {
					const canvas = canvasRef.current;
					if (!canvas) {
						return;
					}
					
					canvas.toBlob(async (blob) => {
						if (blob === null) {
							alert('Failed to download QR code, please try again');
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
							alert('Failed to copy to clipboard, please try again');
						}
					});
				}}
			>
				Copy to clipboard
			</button>
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
