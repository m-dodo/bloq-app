import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import style from './Card.style'

const CardStyled = styled.div(() => ({ ...style() }))

const Card = ({ hello, post }) => {
    console.log(hello, 'Card component')
    return (
        <CardStyled>
            <Image src="/placeholder.jpg" width="130" height="200" alt="Article" />
            <div className="cardText">
                <Link href="/posts/[id]" as={`/posts/${post.id}`} passHref>
                    <div>
                        {' '}
                        <h3>{post.title}</h3>
                        <div className="cardButton">Read more</div>
                    </div>
                </Link>
            </div>
        </CardStyled>
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
