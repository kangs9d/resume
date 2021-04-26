import Head from "next/head"
import React from "react"
import styles from "../styles/Home.module.css"

const Header = () => {
	const onClickTitle = () => {
		location.href = "/"
	}
	return <>
		<Head>
			<title>Bakjuna Resume</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<div className={styles.gif}>

			<img src="./avatar.jpeg" className={styles.titleImg}></img>

			<h1 className={styles.title} onClick={() => onClickTitle()}>
				Bakjuna Resume
			</h1>

			<p className={styles.description}>
				<code className={styles.code}><span className={styles.const}>const</span> moto:<span className={styles.stringConst}>string</span> = <span className={styles.string}>"codes can make life more fulfilled!"</span></code>
			</p>
		</div>
	</>
}

export default Header