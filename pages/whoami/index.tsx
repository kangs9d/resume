import Header from '../header'
import styles from '../../styles/Home.module.css'
import Contact from '../../utils/contact'
import Footer from '../footer'
import AboutMe from './aboutMe'

const WhoAmI = () => {
	return (
	<div className={styles.container}>
		<Header></Header>
		<main className={styles.main}>
			<Contact></Contact>
            <AboutMe></AboutMe>
		</main>

		<Footer></Footer>
	</div>)
}

export default WhoAmI