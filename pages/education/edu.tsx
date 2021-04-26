import styles from '../../styles/Home.module.css'

const Edu = () => {

    const EduJSON = [
        {
            school: "서울대학교",
            major: "전기정보공학부",
            when: "2016년 3월 ~",
            summary: "전기정보공학부지만 수강과목은 컴퓨터 과목 위주입니다.",
        },
        {
            school: "무거고등학교",
            when: "2011년 3월 ~ 2014년 2월",
            summary: "울산 소재 무거고등학교 졸업"
        }
    ]
    return <>
        <div className={styles.greyBackground}>
			<h1>Education</h1>
		</div>
        { EduJSON.map((edu) => (
            <div className={styles.inPage}>
                <h1>{edu.school}</h1>
                <h2>{edu.major ? edu.major + "•" : ""} {edu.when}</h2>
                <h3>{edu.summary}</h3>
            </div>
        )
        )}
    </>
}

export default Edu