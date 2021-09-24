import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import Comments from '../Comments/Comments.component'

import style from './Card.style'

const CardStyled = styled.div(() => ({ ...style() }))

const Card = ({ hello, post, comments, author }) => {
    console.log(hello, 'Card component')

    return (
        <CardStyled>
            <div className="cardContent">
                <Image src="/imagePlaceholder.png" width="150" height="150" alt="Article" />
                <div className="cardText">
                    <Link href="/posts/[id]" as={`/posts/${post.id}`} passHref>
                        <div>
                            {' '}
                            <h3>{post.title}</h3>
                            <p>by {author.name}</p>
                            <div className="cardButton">Read more</div>
                        </div>
                    </Link>
                </div>
            </div>
            <Comments comments={comments} hello={hello} />
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
    }).isRequired
}
