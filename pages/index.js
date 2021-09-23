import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>BloQ</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main>
                <h1 className="homepageTitle">BloQ</h1>
                <div className="homepageCta">
                    <Image src="/reader.jpg" width="400" height="270" alt="Coffee photo created by wayhomestudio" />
                    <div>
                        <h2>Posts</h2>
                        <p>Wanna read some awesome posts?</p>
                        <Link href="/posts">Click here</Link>
                    </div>
                </div>
            </main>

            <footer>Task app by Q</footer>
        </div>
    )
}
