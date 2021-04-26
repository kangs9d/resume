import styles from '../styles/Home.module.css'

const Contact = () => {
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

	return <>
		<h1>Contact Links</h1>
		<div className={styles.contactDiv}>
			<div className={styles.contact} style={{background:"url('/linkedin.png')", backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition:"center"}} onClick={() => onClickLinkedInHandler()}></div>
			<div className={styles.contact} style={{background:"url('/phone-png.png')", backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition:"center"}} onClick={() => onClickPhoneHandler()}></div>
			<div className={styles.contact} style={{background:"url('/email.png')", backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition:"center"}} onClick={() => onClickEmailHandler()}></div>
			<div className={styles.contact} style={{background:"url('/github.png')", backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition:"center"}} onClick={() => onClickGithubHandler()}></div>
			<div className={styles.contact} style={{background:"url('/tistory.png')", backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition:"center"}} onClick={() => onClickBlogHandler()}></div>
		</div>
	</>
}

export default Contact