import styles from '../../styles/Home.module.css'

const Skills = () => {

	const SkillsJSON = [
		{
			title: "Python",
			list: [
				"Django App, middleware에 대해서 이해하고 관련 API를 능숙하게 다룰 수 있습니다.",
				"websocket 라이브러리 Channels를 이용한 실시간 통신 시스템을 구축할 수 있습니다.",
				"nginx, uwsgi, SSL 연동을 빠르게 할 수 있습니다.",
				"crontab을 통한 일정 관리를 할 수 있습니다."
			]
		},
		{
			title: "Java/Kotlin",
			list: [
				"VO, DAO를 통한 DB 관리에 능숙합니다. 또한, Hibernate, JPA를 다룰 수 있습니다.",
				"Nginx를 이용한 웹서버 연동을 할 수 있습니다.",
				"Lombok과 queryDsl 등 스프링 프로젝트에 쓰이는 라이브러리들을 다룰 수 있습니다.",
				"CLI - Java tomcat server 연동을 통한 electrum cold wallet 관리를 할 수 있습니다.",
				"Kotlin Exposed를 이용한 DB Handling을 할 수 있습니다.",
				"기존 자바 프로젝트의 De-lombok을 할 수 있습니다.",
				"함수형 프로그래밍 방법론을 적용하여 프로그래밍할 수 있습니다."
			]
		},
		{
			title: "Typescript",
			list: [
				"NestJS, Express를 이용하여 백엔드 서버를 구축할 수 있습니다.",
				"React hooks를 이용하여 웹사이트 프론트엔드를 구축할 수 있습니다.",
				"다양한 디자인 패턴을 적용하여 최적화된 코드를 만들 수 있습니다."
			]
		},
		{
			title: "DevOps",
			list: [
				"작은 규모의 프로젝트인 경우 linux CLI와 Nginx 웹서버 혹은 Tomcat을 같이 이용하여 직접 서비스할 수 있습니다.",
				"gunicorn, uwsgi 등의 웹서버 설정과 static file 처리법을 알고 있습니다.",
				"Azure Pipeline, Jenkins를 구축할 수 있습니다.",
				"lambda/ECS를 이용할 수 있습니다.",
			]
		},
		{
			title: "Databases",
			list: [
				"MySQL 종류와 PostgreSQL을 다룰 수 있습니다.",
				"redis와 같은 온메모리 DB를 다룰 수 있습니다.",
				"join, union, procedure 등 DB SQL을 짜는 데에 어려움이 없습니다."
			]
		},
		{
			title: "기타",
			list: [
				"Unity Game Client를 다뤄본 적 있고, 기본적인 게임을 구성할 수 있습니다.",
				"HTML5 게임을 구축하기 위해 Phaser3 엔진을 다뤄본 적 있고 사용할 수 있습니다.",
				"다양한 Computer Science 기본 지식을 지니고 있습니다."
			]
		}
	]
	return <>
		<div className={styles.greyBackground}>
			<h1>Education</h1>
		</div>
		{ SkillsJSON.map((skill) => (
			<div className={styles.inPage}>
				<h1>{skill.title}</h1>
				{skill.list.map((abil) => (
					<li>{abil}</li>
				))}

			</div>
		)
		)}
	</>
}

export default Skills