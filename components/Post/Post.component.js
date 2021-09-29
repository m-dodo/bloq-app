/* eslint-disable no-console */
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import style from './Post.style'

const PostStyled = styled.div(() => ({ ...style() }))

const Post = ({ hello, post, author }) => {
    console.log(hello, 'Post component')

    return (
        <PostStyled>
            <Head>
                <title>BloQ | {post.title}</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="backImage">
                <Link href="/posts" passHref>
                    <>
                        <Image src="/back-button.png" width="50" height="50" alt="Back" />
                    </>
                </Link>
            </div>
            <h1>{post.title}</h1>
            {author.name && <p className="postAuthor">Written by: {author.name}</p>}
            <hr />
            <div>{post.body}</div>
        </PostStyled>
    )
}

export default Post

Post.propTypes = {
    hello: PropTypes.string.isRequired,
    post: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        body: PropTypes.string
    }).isRequired,
    author: PropTypes.shape({
        name: PropTypes.string
    })
}

Post.defaultProps = {
    author: undefined
}
