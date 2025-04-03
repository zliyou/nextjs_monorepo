import { GetStaticProps } from "next"
import { useRouter } from "next/router"

type CommodityProps = {
    title: string
}
const CommodityDetailPage = function ({title}: CommodityProps) {
    const { query } = useRouter()
    console.log('query', query)
    return (
        <div>
            <h1>{ title }</h1>
            <h1>参数id：{ query.id }</h1>
        </div>
    )
}

export async function getStaticPaths() {
    return {
        // paths: [
        //     { params: { id: '1' } },
        //     { params: { id: '2' } },
        //     { params: { id: '3' } },
        // ],
        paths: [],
        fallback: true,
    }
}
export const getStaticProps: GetStaticProps<CommodityProps> = function ({params,}) {
    console.log('sataic', params)
    return {
        props: {
            title: '传递参数' + params?.id
        }
    }
}


export default CommodityDetailPage