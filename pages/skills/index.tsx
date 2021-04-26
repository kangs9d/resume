import Header from '../header'
import styles from '../../styles/Home.module.css'
import Contact from '../../utils/contact'
import Footer from '../footer'

const Skills = () => {
	return (
	<div className={styles.container}>
		<Header></Header>
		<main className={styles.main}>
			<Contact></Contact>
            <Skills></Skills>
		</main>

		<Footer></Footer>
	</div>)
}

export default Skills