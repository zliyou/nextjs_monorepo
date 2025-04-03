export function ButtonComp(props: {timer: number}) {
    console.log('按钮', props)
    return (
        <div>
            <button>按钮内容</button>
        </div>
    )
}

export function getStaticProps() {
    return {
        props: {
            timer: 123
        }
    }
}