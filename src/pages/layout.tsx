import { ReactNode } from 'react'

type LayoutProps = {
    children: ReactNode
}

export default function Layout({children}: LayoutProps) {
    return <div>
        <header>
            <h1>头部</h1>

        </header>
        { children }
        <footer>底部</footer>
    </div>
}