import Head from 'next/head'
import helloMsg from '../global'
import HomeScreen from '../components/HomeScreen/HomeScreen.component'

export default function Home() {
    return (
        <>
            <Head>
                <title>BloQ</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <HomeScreen hello={helloMsg} />
        </>
    )
}
