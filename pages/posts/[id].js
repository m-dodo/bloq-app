import React from 'react'
import PropTypes from 'prop-types'

const Post = ({ post }) => {
    console.log(post)

    return <p>Post: {post.id}</p>
}

export async function getServerSideProps({ query }) {
    const { id } = query
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()

    return { props: { post } }
}

Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number
    }).isRequired
}

export default Post
