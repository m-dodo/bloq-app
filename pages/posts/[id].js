import React from 'react'
import PropTypes from 'prop-types'
import helloMsg from '../../global'
import Post from '../../components/Post/Post.component'

const SinglePost = ({ post, author }) => {
    return <Post post={post} author={author} hello={helloMsg} />
}

export async function getServerSideProps({ query }) {
    const { id } = query
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()

    const { userId } = post
    const resAuthor = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const author = await resAuthor.json()

    return { props: { post, author } }
}

SinglePost.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number
    }).isRequired,
    author: PropTypes.shape({
        id: PropTypes.number
    }).isRequired
}

export default SinglePost
