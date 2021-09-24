import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import Card from '../Card/Card.component'

import style from './Listing.style'

const ListingStyled = styled.div(() => ({ ...style() }))

const Listing = ({ hello, posts }) => {
    console.log(hello, 'Listing component')
    return (
        <ListingStyled>
            <Link href="/" passHref>
                <Image src="/back-button.png" width="50" height="50" alt="Back" />
            </Link>
            <h1>Posts</h1>
            <div className="listingCards">
                {' '}
                {posts.slice(0, 5).map((post) => (
                    <Card hello={hello} post={post} />
                ))}
            </div>
        </ListingStyled>
    )
}

Listing.propTypes = {
    hello: PropTypes.string.isRequired,
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number
        })
    ).isRequired
}

export default Listing
