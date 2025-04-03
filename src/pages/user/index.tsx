import { GetStaticProps } from "next"
import { useRouter } from "next/router"

export default function User() {
    const route = useRouter()
        console.log('route', route)
    return <div>
        user1
    </div>
}


export const getStaticProps: GetStaticProps = async () => {
    await wait(20)
    return {
        props: {
            title: '我的'
        }
    }
}

function wait(d: number) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            resolve('哈哈哈')
            clearTimeout(timer)
        }, d);
})
}