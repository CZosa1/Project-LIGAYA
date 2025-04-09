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
						<img src={LaongLaan} />
					</section>
					<section className={'s2'}>
						<h1>TEAM LAONG-LAAN</h1>
					</section>
					<section className={'s3'}>
						<img src={OversightHead} />
						<p>OVERSIGHT HEAD</p>
					</section>
					<section className={'s4'}>
						<img src={OperationsHead} />
						<p>OPERATIONS HEAD</p>
					</section>
					<section className={'s5'}>
						<img src={LogisticsHead} />
						<p>LOGISTICS HEAD</p>
					</section>
					<section className={'s6'}>
						<img src={ResearchHead} />
						<p>RESEARCH HEAD</p>
					</section>
					<section className={'s7'}>
						<img src={CreativesHead} />
						<p>CREATIVES HEAD</p>
					</section>
				</div>
			</section>
		</main>
	);
}

export default WhoPage;
