import ProjectLigayaLogo from '@/assets/ProjectLigayaLogo.png';

import './MissionPage.scss';

const MissionPage: React.FC = () => {
	return (
		<main className={'missionPage'}>
			<section className={'header'}>
				<h1>OUR MISSION</h1>
				<img className={'background'} src={ProjectLigayaLogo} />
			</section>
			<section className={'body'}>
				<div className={'content'}>
					<p className={'first'}>Project LIGAYA is committed to addressing educational inequality by providing foundational literacy and learning opportunities to underserved Filipino children, particularly those experiencing homelessness. Rooted in the ideals of service, guidance, and camaraderie, we strive to cultivate environments where learning is accessible, meaningful, and transformative.</p>
					<p className={'second'}>Through community partnerships, grassroots outreach, and student-led instruction, we aim to empower young learners with the skills and confidence needed to shape their own futures. Inspired by the legacy of Jose Rizal and the spirit of Laong Laan, our mission is to foster a culture of peace through equitable education—where every child is given the tools to learn, grow, and lead.</p>
				</div>
				<div className={'mission'}>
					<h2>Service (Lingkod)</h2>
					<p>We believe in serving communities with humility and purpose. Our work is driven by a deep commitment to uplift others through education and advocacy.</p>
					<h2>Inspiration (Inspirasyon)</h2>
					<p>We aim to ignite hope and confidence in every learner. By fostering a love for learning, we encourage children to dream beyond their current circumstances.</p>
					<h2>Guidance (Gabay)</h2>
					<p>Through mentorship and patient instruction, we guide learners as they navigate the path toward literacy, growth, and self-determination.</p>
					<h2>Offering (Alay)</h2>
					<p>Education is our offering—a gift freely given, rooted in compassion and solidarity. We give our time, energy, and skills to build a better future together.</p>
					<h2>Chapters (Yugto)</h2>
					<p>We recognize that each learner is beginning a new chapter. Our role is to support these pivotal moments with meaningful learning experiences.</p>
					<h2>Camaraderie (Akbay)</h2>
					<p>We value the spirit of togetherness. Whether among students, volunteers, or partner organizations, we walk beside one another—shoulder to shoulder—in shared purpose.</p>
				</div>
			</section>
		</main>
	);
}

export default MissionPage;
