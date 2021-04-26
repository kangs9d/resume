import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Main = () => {

	const onClickLinkedInHandler = () => {
		location.href = "https://linkedin.com/in/bakjuna"
	}

	const onClickPhoneHandler = () => {
		location.href = "tel:01027541750"
	}

	const onClickEmailHandler = () => {
		location.href = "mailto:bakjuna@gmail.com"
	}

	const onClickGithubHandler = () => {
		location.href = "https://github.com/kangs9d"
	}

	const onClickBlogHandler = () => {
		location.href = "https://bakjuna.tistory.com"
	}
	return (
		<div className={styles.container}>
			<Head>
				<title>Bakjuna Resume</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.gif}>

				<img src="./avatar.jpeg" className={styles.titleImg}></img>

				<h1 className={styles.title}>
					Bakjuna Resume
				</h1>

				<p className={styles.description}>
				<code className={styles.code}><span className={styles.const}>const</span> moto:<span className={styles.stringConst}>string</span> = <span className={styles.string}>"codes can make life more fulfilled!"</span></code>
				</p>
			</div>
			<main className={styles.main}>
				<h1>Contact Links</h1>
				<div style={{ margin: "10px 0",width:"100%", display:"flex"}}>
					
					<div className={styles.contact} style={{background:"url('/linkedin.png')", backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition:"center"}} onClick={() => onClickLinkedInHandler()}></div>
					<div className={styles.contact} style={{background:"url('/phone-png.png')", backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition:"center"}} onClick={() => onClickPhoneHandler()}></div>
					<div className={styles.contact} style={{background:"url('/email.png')", backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition:"center"}} onClick={() => onClickEmailHandler()}></div>
					<div className={styles.contact} style={{background:"url('/github.png')", backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition:"center"}} onClick={() => onClickGithubHandler()}></div>
					<div className={styles.contact} style={{background:"url('/tistory.png')", backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition:"center"}} onClick={() => onClickBlogHandler()}></div>
				</div>

				<div className={styles.grid}>
					<a href="/work" className={styles.card}>
					<h3>일했던 이력 &rarr;</h3>
					<p>이 때까지 진행했거나 진행하고 있는 프로젝트 등을 확인하실 수 있어요.</p>
					</a>

					<a href="/education" className={styles.card}>
					<h3>교육 &rarr;</h3>
					<p>제가 교육받았던 학교와 주의깊게 읽었던 개발 서적 등을 보세요.</p>
					</a>

					<a href="/skills" className={styles.card}>
					<h3>스킬셋 &rarr;</h3>
					<p>제가 가진 기술 목록을 확인하세요.</p>
					</a>

					<a href="/aboutMe" className={styles.card}>
					<h3>박준하는 누구인가 &rarr;</h3>
					<p> 박준하에 대해서 확인해보세요.</p>
					</a>
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