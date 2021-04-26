import styles from '../../styles/Home.module.css'

const Projects = () => {

    const projectsJSON = [
        {
            projectName: "modooai-careplus.com",
            url: "https://careplus.modooai.com/",
            workedAt: "2020년 9월~2020년 11월",
            summary: "개발 전체, 기획",
            pinpoint: [
                "파이썬 장고를 이용한 모두아이 케어플러스 웹사이트 전체 개발",
                "Django 회원 관리 기능, 어드민, 서비스, 검색 기능 등 전체 동작 개발",
                "gunicorn, nginx로 static proxy 기능 구현, amazon EC2/S3/Route53 등 아마존 서비스를 이용해 서버 관리"
            ]
        },
        {
            projectName: "modooai.com",
            url: "https://modooai.com/",
            workedAt: "2020년 6월~2020년 11월",
            summary: "개발 전체, 기획",
            pinpoint: [
                "파이썬 장고를 이용한 모두아이 웹사이트 전체 개발",
                "Django 회원 관리 기능, 어드민, 서비스, 페이먼트 등 전체 동작 개발",
                "gunicorn, nginx로 static proxy 기능 구현, amazon EC2/S3/Route53 등 아마존 서비스를 이용해 서버 관리"
            ]
        },
        {
            projectName: "Casino Stadium",
            workedAt: "2019년 1월 ~ 2020년 1월",
            summary: "서버 기여도 100%, front-end 기여도 30%",
            pinpoint: [
                "유니티 엔진을 이용한 WebGL 클라이언트 개발",
                "Django server에서 게임 스핀셋, DB 접근, 관리자 행동 관리",
                "Channels framework를 이용한 websocket을 통해 실시간 카드 게임 제공"
            ]
        },
        {
            projectName: "Lottery Scratch",
            url:"https://apps.facebook.com/lotteryscratch/",
            workedAt: "2019년 12월",
            summary: "기여도 100%",
            pinpoint: [
                "유니티 엔진을 이용한 WebGL, 안드로이드 클라이언트 개발",
                "Django server에서 게임 스핀셋, DB 접근 관리",
                "nginx, uwsgi, SSL 연동"
            ]
        },
        {
            projectName: "totoringgo",
            workedAt: "2019년 9월",
            summary: "전체 개발 managing",
            pinpoint: [
                "일반 개발자 2명, 퍼블리셔 1명 총 4명 Tech PM 담당",
                "Django를 이용한 게시판 글 생성, 덧글 관리 등 게시판 기능 제작",
                "django user model과 channels를 이용한 chatting service 제공",
                "MSSQL과 Django가 호환되지 않아(MSSQL 버전이 너무 낮아서) 중간 Java Spring Server를 구축해 간이 API 구축",
                "Kakao, Google, facebook, Naver 로그인 API 연동",
                "퍼블리셔와 협업해 해상도별 반응형 HTML 사이트 구축"
            ]
        },
        {
            projectName: "coinparadice.io",
            url: "https://coinparadice.io",
            workedAt: "2019년 1월 ~ 2019년 6월",
            summary: "전체 개발",
            pinpoint: [
                "electrum을 이용한 블록체인 (비트코인) 결제 시스템 구축",
                "HTML5 슬롯, 다이스, 카지노워 카드 게임 개발",
                "Client가 설정한 string seed와 Server seed를 이용한 게임 조작 방지 fairness 로직 개발",
                "웹/모바일을 가리지 않는 반응형 웹사이트 제작"
            ]
        },
        {
            projectName: "Civilization World Casino 외 facebook game 3종",
            url: "https://apps.facebook.com/civilworldcasino",
            workedAt: "2019년 1월 ~ 2019년 6월",
            summary: "전체 개발",
            pinpoint: [
                "facebook 최신 API에 대응하는 서버 환경 유지",
                "최신 정책을 반영한 유지 보수 작업"
            ]
        },
        
    ]
    return <>
        <div className={styles.greyBackground}>
			<h1>Projects</h1>
		</div>
        { projectsJSON.map((prj) => (
            <div className={styles.inPage}>
                <h2><a className={prj.url? styles.shineHover : ""} href={prj.url? prj.url : "javascript:void(0)"}>{prj.projectName}</a> • {prj.workedAt}</h2>
                <h3>{prj.summary}</h3>
                {prj.pinpoint.map((point) => (
                    <li>{point}</li>
                ))}
            </div>
        )
        )}
    </>
}

export default Projects