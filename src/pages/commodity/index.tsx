import { GetStaticProps } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import aUrl from '@/assets/images/a.png'
import styles from './index.module.scss'
import { useEffect } from "react"
import { axios } from "@/lib/request"

export default function CommodityPage(body: {times: number}) {
    console.log('target env', process.env.NEXT_ENV);
    const route = useRouter()
    console.log('route', route.query)
    useEffect(() => {
        axios.get('/api/hello').then(res => {
            console.log('target res' , res);
        })
    }, [])

    return (
        <div>
            <h2 className={'font-bold text-4xl text-teal-300'}>这是首页哦</h2>
            <h1 className="mt-8">Hello World Commodity Page: { body.times }</h1>
            <h1>参数id值

                ：{ route.query.id }</h1>
                <Image alt=""  className={styles.export} src={aUrl}></Image>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (body) => {
    const data = await wait()
    console.log('params', body, data)
    
    return {
        props: {
            times: data
        }
    }
}

function wait() {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            resolve('哈哈哈')
            clearTimeout(timer)
        }, 100);
})
}