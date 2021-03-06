import Header from '../header'
import styles from '../../styles/Home.module.css'
import Contact from '../../utils/contact'
import Footer from '../footer'
import Skills from './skills'

const SkillSet = () => {
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

export default SkillSet