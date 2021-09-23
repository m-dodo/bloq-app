import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import styled from '@emotion/styled'
import PropTypes from 'prop-types'

// import style from './Card.style'

// const CardStyled = styled.div(() => ({ ...style() }))

const Card = ({ hello, post }) => {
    console.log(hello, 'Card component')
    return (
        <>
            <div className="cardContent">
                <Image src="/placeholder.jpg" width="80" height="200" alt="Article" />
                <Link href="/posts/[id]" as={`/posts/${post.id}`} passHref={false}>
                    <h3>{post.title}</h3>
                    <p>Read more</p>
                </Link>
            </div>

            <hr />
        </>
    )
}

export default Card

Card.propTypes = {
    hello: PropTypes.string.isRequired,
    post: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string
    }).isRequired
}
