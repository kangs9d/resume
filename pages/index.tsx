import styles from '../styles/Home.module.css'
import Contact from '../utils/contact'
import Header from './header'

const Main = () => {

	const cards = [
		{
			url:"/work",
			title:"경험과 프로젝트",
			description:"이 때까지 진행했거나 진행하고 있는 프로젝트 등을 확인하실 수 있어요."
		},
		{
			url:"/education",
			title:"교육",
			description:"제가 교육받았던 학교와 주의깊게 읽었던 개발 서적 등을 보세요."
		},
		{
			url:"/skills",
			title:"스킬셋",
			description:"제가 가진 기술 목록을 확인하세요."
		},
		{
			url:"/aboutMe",
			title:"박준하는 누구인가",
			description:"박준하에 대해서 확인해보세요."
		}
	]

	return (
		<div className={styles.container}>
			<Header></Header>
			<main className={styles.main}>
				<Contact></Contact>
				<div className={styles.grid}>
					{
						cards.map((card) => (
							<a href={card.url} className={styles.card}>
							<h3>{card.title} &rarr;</h3>
							<p>{card.description}</p>
							</a>
						))
					}
				</div>
			</main>

			<footer className={styles.footer}>
					<div className={styles.flex}><img src='/phone-png.png' className={styles.img}></img><a>010-2754-1750</a></div>
					<div className={styles.flex}><img src='/email.png' className={styles.img}></img><a>bakjuna@gmail.com</a></div>
			</footer>
		</div>
		
	)
}

export default Main