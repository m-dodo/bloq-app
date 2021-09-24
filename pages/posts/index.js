import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import Listing from '../../components/Listing/Listing.component'
import helloMsg from '../../global'

const Posts = ({ posts, comments, authors }) => {
    return (
        <>
            <Head>
                <title>Posts | BloQ</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Listing hello={helloMsg} posts={posts} comments={comments} authors={authors} />
        </>
    )
}

Posts.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    authors: PropTypes.arrayOf(PropTypes.shape({})).isRequired
}

export async function getServerSideProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await res.json()

    const resComments = await fetch(`https://jsonplaceholder.typicode.com/comments`)
    const comments = await resComments.json()

    const resAuthors = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const authors = await resAuthors.json()

    return { props: { posts, comments, authors } }
}

export default Posts
