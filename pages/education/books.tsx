import styles from '../../styles/Home.module.css'

const Books = () => {

    const BooksJSON = [
        {
            name: "코틀린으로 배우는 함수형 프로그래밍",
            felt: "코틀린을 통해서 함수형 프로그래밍 방법론에 처음 접근했습니다. 먼저 왜 이러한 방법론을 쓰는지 아는 것도 중요하지만, \
            무엇이 불편한지 스스로 깨닫는 것도 좋은 학습 방법이라고 생각합니다. 이런 점에서 이 책으로 가장 기초적인 함수형 프로그래밍 방법을 \
            배울 수 있었고, 더 넘어서 스스로 어떻게 프로그래밍 하는 것이 옳은지 생각할 수 있는 계기가 되었습니다.",
        },
        {
            name: "오브젝트",
            felt: "OOP를 말하는 것은 쉽지만 구체적으로 내 코드에 녹여내어서 정확히 적용하는 것은 쉽지 않습니다. 저도 여러 자료를 찾아보고, \
            다양한 영상도 시청해봤지만 결국 본질적으로 머리에서 책임과 역할, 그리고 encapsulation이라는 개념이 정확하게 인지되지 않으면 \
            많은 도움이 되진 않았던 것 같습니다. 이 책을 통해 조금 더 정확한 이해와 본질적인 접근이 가능해졌다고 생각합니다."
        },
        {
            name: "고전 컴퓨터 알고리즘 인 파이썬",
            felt: "알고리즘 공부를 하는데에 있어서 책이 효율적이지 않다곤 하지만, 옛날부터 널리 알려진 유명한 알고리즘을 스스로 체화시키는 데에는 \
            책만큼 훌륭한 교본이 없다고 생각합니다. 특히나 블로그, 영상보다 더 정제되고 사려깊은 서술이 이해력의 향상에 아주 큰 도움이 됐습니다."
        }

    ]
    return <>
        <div className={styles.greyBackground}>
			<h1>Books</h1>
		</div>
        { BooksJSON.map((book) => (
            <div className={styles.inPage}>
                <h1>{book.name}</h1>
                <p className={styles.paragraph}>{book.felt}</p>
            </div>
        )
        )}
    </>
}

export default Books