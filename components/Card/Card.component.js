/* eslint-disable no-console */
import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import Comments from '../Comments/Comments.component'

import style from './Card.style'

const CardStyled = styled.div(() => ({ ...style() }))

const Card = ({ hello, post, comments, author, linkHref, linkAs, linkLabel }) => {
    console.log(hello, 'Card component')

    return (
        <CardStyled>
            <div className="cardContent">
                <Image src="/imagePlaceholder.png" width="150" height="150" alt="Article" />
                <div className="cardText">
                    <Link href={linkHref} as={linkAs} passHref>
                        <div>
                            {' '}
                            <h3>{post.title}</h3>
                            {author.name && <p>by {author.name}</p>}
                            <div className="cardButton">{linkLabel}</div>
                        </div>
                    </Link>
                </div>
            </div>
            {comments && <Comments comments={comments} hello={hello} />}
        </CardStyled>
    )
}

export default Card

Card.propTypes = {
    hello: PropTypes.string.isRequired,
    post: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string
    }).isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    author: PropTypes.shape({
        name: PropTypes.string
    }).isRequired,
    linkHref: PropTypes.string.isRequired,
    linkAs: PropTypes.string.isRequired,
    linkLabel: PropTypes.string.isRequired
}
