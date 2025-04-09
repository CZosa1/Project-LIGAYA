import { useEffect } from 'react';

import ProjectLigayaLogo from '@/assets/ProjectLigayaLogo.png';
import LaongLaan from '@/assets/LAONG_LAAN.png';
import OversightHead from '@/assets/OversightHead.png';
import ResearchHead from '@/assets/ResearchHead.png';
import OperationsHead from '@/assets/OperationsHead.png';
import LogisticsHead from '@/assets/LogisticsHead.png';
import CreativesHead from '@/assets/CreativesHead.png';

import './WhoPage.scss';

const WhoPage: React.FC = () => {
	useEffect(() => {
		document.title = 'Project LIGAYA - Who are we?';
	});
	
	return (
		<main className={'whoPage'}>
			<section className={'header'} data-nosnippet>
				<h1>Who are we?</h1>
				<img className={'background'} src={ProjectLigayaLogo} />
			</section>
			<section className={'body'}>
				<div className={'content'}>
					<section className={'s1'}>
						<div className={'content'}>
							<h1>TEAM LAONG-LAAN</h1>
							<img src={LaongLaan} />
						</div>
					</section>
					<section className={'s2'}>
						<p>OVERSIGHT HEAD</p>
						<img src={OversightHead} />
					</section>
					<section className={'s3'}>
						<p>OPERATIONS HEAD</p>
						<img src={OperationsHead} />
					</section>
					<section className={'s4'}>
						<p>LOGISTICS HEAD</p>
						<img src={LogisticsHead} />
					</section>
					<section className={'s5'}>
						<p>RESEARCH HEAD</p>
						<img src={ResearchHead} />
					</section>
					<section className={'s6'}>
						<p>CREATIVES HEAD</p>
						<img src={CreativesHead} />
					</section>
				</div>
			</section>
		</main>
	);
}

export default WhoPage;
