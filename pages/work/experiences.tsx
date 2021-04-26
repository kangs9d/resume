import styles from '../../styles/Home.module.css'

const Experience = () => {

	const experienceJSON = [
		{
			companyName: "직방",
			workedAt: "2021년 1월 ~",
			summary: "백엔드 개발, 리액트 어드민 개발",
			smallSummary: "원룸, 오피스텔, 빌라 관련 백엔드 로직 유지/보수/개발, 사내 어드민 프론트/백엔드 개발",
			pinpoint: [
				"프론트 개발에 React, Next 사용",
				"NestJS, TypeORM, express를 사용한 백엔드 개발",
				"다양한 협업 경험"
			]
		},
		{
			companyName: "모두아이",
			workedAt: "2020년 6월 ~ 2020년 12월",
			summary: "서버, 웹 프론트엔드 개발, devOps",
			smallSummary: "Python Django를 이용한 서버 개발",
			pinpoint: [
				"Django ORM을 통한 postgreSQL의 다양한 쿼리 제어",
				"ajax, http 등 js 비동기 통신 제어",
				"부트스트랩 등을 이용한 html 핸들링"
			]
		},
		{
			companyName: "Chequer",
			workedAt: "2020년 3월 ~ 2020년 6월",
			summary: "서버 소프트웨어 개발",
			smallSummary: "Java/Kotlin SpringBoot를 이용한 서버 개발",
			pinpoint: [
				"Kotlin - Java JVM 서버 통합",
				"DDD, SOLID 원칙을 통한 코드 리팩토링",
				"DB 구조 변경, 유지"
			]
		},
		{
			companyName: "NTU",
			workedAt: "2018년 1월 ~ 2020년 1월",
			summary: "유니티 서버/클라이언트 개발",
			smallSummary: "페이스북 게임 개발, 서버/DB 관리",
			pinpoint: [
				"HTML5 게임 개발",
				"HTML5 Phaser 엔진 기반 게임 개발",
				"Unity WebGL 게임 개발",
				"Tomcat/Spring MVC 기반 서버 개발/유지",
				"facebook flash 게임 유지/보수",
				"Electrum (Blockchain wallet API)를 이용한 게임 사이트 유지/보수",
				"Python django 사이트/게임 서버 개발"
			]
		},
		{
			companyName: "Snatcher",
			workedAt: "2017년 8월 ~ 2018년 1월",
			summary: "드론 소프트웨어 제작",
			smallSummary: "드론 제작, 내부 소프트웨어, 조종 등의 업무",
			pinpoint: [
				"ubuntu상에서 python을 이용한 실제 기기 컨트롤",
				"Nvidia Jetson/Raspberry 설치 및 응용프로그램 제작"
				
			]
		}
	]
	return <>
		<div className={styles.greyBackground}>
			<h1>Experiences</h1>
		</div>
		{ experienceJSON.map((exp) => (
			<div className={styles.inPage}>
				<h2>{exp.companyName} • {exp.workedAt}</h2>
				<h3>{exp.summary}</h3>
				<span> {exp.smallSummary}</span>
				{exp.pinpoint.map((point) => (
					<li>{point}</li>
				))}
			</div>
		)
		)}
	</>
}

export default Experience