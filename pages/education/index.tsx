import Header from '../header'
import Footer from '../footer'
import styles from '../../styles/Home.module.css'
import Contact from '../../utils/contact'
import Edu from './edu'
import Books from './books'

const Work = () => {
	return (
	<div className={styles.container}>
		<Header></Header>
		<main className={styles.main}>
			<Contact></Contact>
			<Edu></Edu>
			<Books></Books>
		</main>

		<Footer></Footer>
	</div>)
}

export default Work
