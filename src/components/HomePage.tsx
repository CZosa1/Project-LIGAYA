import ProjectLigayaLogo from '@/assets/ProjectLigayaLogo.png';
import InstagramLogo from '@/assets/instagram.svg';

import './HomePage.scss';

const Home: React.FC = () => {
	return (
		<main className={'homePage'}>
			<section className={'introduction'}>
				<img className={'logo'} src={ProjectLigayaLogo} />
				<h1 className={'title'}>Team LAONG-LAAN</h1>
				<h2 className={'obmc'}>O.B. Montessori Center - Greenhills</h2>
				<a className={'instagramLink'} href={'https://www.instagram.com/project._.ligaya'}>
					<img className={'logo'} src={InstagramLogo} />
					<p className={'url'}>https://www.instagram.com/project._.ligaya</p>
				</a>
			</section>
			<section className={'body'}>
				<div className={'content'}>
					<p className={'first'}>Project LIGAYA, an acronym for Lingkod, Inspirasyon, Gabay, Alay, Yugto, Akbay ("To serve, to inspire, to guide, to offer a chapter and camaraderie"), is a youth-led educational initiative under Team Laong-Laan, committed to promoting literacy, equity, and peace through community-centered action.</p>
					<p className={'second'}>Grounded in research and driven by compassion, Project LIGAYA addresses the barriers to education faced by homeless and underserved children in the Philippines. In partnership with organizations like YMCA Makati's Gabay Aral, we aim to provide one-on-one tutoring, foundational literacy instruction, and essential school supplies to children housed in shelters such as Kanlungan sa Er-ma—where an estimated 50% of children lack basic reading and numeracy skills.</p>
				</div>
			</section>
		</main>
	);
}

export default Home;
