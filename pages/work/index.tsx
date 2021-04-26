import Header from '../header'
import styles from '../../styles/Home.module.css'
import Contact from '../../utils/contact'
import Experience from './experiences'
import Projects from './projects'
import Footer from '../footer'

const Work = () => {
	return (
	<div className={styles.container}>
		<Header></Header>
		<main className={styles.main}>
			<Contact></Contact>
			<Experience></Experience>
			<Projects></Projects>
		</main>

		<Footer></Footer>
	</div>)
}

export default Work
