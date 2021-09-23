import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import Listing from '../../components/Listing/Listing.component'
import helloMsg from '../../global'

const Posts = ({ posts }) => {
    console.log(posts[0])
    return (
        <>
            <Head>
                <title>Posts | BloQ</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Listing hello={helloMsg} posts={posts} />
        </>
    )
}

Posts.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired
}

export async function getServerSideProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await res.json()

    return { props: { posts } }
}

export default Posts
