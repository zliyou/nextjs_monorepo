import { GetStaticProps } from "next"
import { useRouter } from "next/router"

type AboutParams = {
    list?: Array<{id: number, name: string}>
}

export default function AboutId(props: AboutParams) {
    console.log('props', props)
    const router = useRouter()
    console.log('router', router)
    return <div>
        aboutid: {props.list?.map((item, index) => (
            <div key={index}>{item.id}: { item.name } </div>
        ))}
    </div>
}
export const getStaticPaths = () => {
    return {
        paths: [],
        fallback: true
    }
}
export const getStaticProps: GetStaticProps<AboutParams> = () => {
    return {
        props: {
            list: [{id: 1,name: 'xxx'}, {id: 2,name: 'yyy'}]
        }
    }
}