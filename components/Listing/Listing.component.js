/* eslint-disable no-console */
import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { useEffect, useState, useMemo } from 'react'
import Card from '../Card/Card.component'

import style from './Listing.style'

const ListingStyled = styled.div(() => ({ ...style() }))

/**
 * Method to find comments linked to a specific post
 *
 * @param {Array} comments
 * @param {Object} post
 * @returns {Array}
 */
const filterCommentsByPost = (comments, post) => {
    const postComments = []
    comments.forEach((comment) => {
        if (comment.postId === post.id) postComments.push(comment)
    })

    return postComments
}

/**
 * Method to find post author
 *
 * @param {Array} authors
 * @param {Object} post
 * @returns {Object}
 */
const findAuthor = (authors, post) => {
    return authors.find((author) => author.id === post.userId)
}

const Listing = ({ hello, h1, posts, comments, authors }) => {
    console.log(hello, 'Listing component')

    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('')
    const [result, setResult] = useState('')

    const filteredPosts = useMemo(() => {
        if (search && filter) {
            const postsByTitle = posts.filter((post) => post.title.includes(search.toLowerCase()))
            const authorByName = authors.filter((author) => author.name.toLowerCase().includes(filter.toLowerCase()))

            const filteredBySearchAndFilter = postsByTitle.filter((post) =>
                authorByName.some((author) => author.id === post.userId)
            )
            return filteredBySearchAndFilter
        }
        if (search) {
            return posts.filter((post) => post.title.includes(search.toLowerCase()))
        }
        if (filter) {
            return posts.filter((post) => {
                const filteredAuthors = authors.filter((author) =>
                    author.name.toLowerCase().includes(filter.toLowerCase())
                )
                if (filteredAuthors.find((author) => author.id === post.userId)) return true
                return false
            })
        }
        return posts
    }, [search, filter, authors, posts])

    useEffect(() => {
        if (filteredPosts.length) setResult(`Found ${filteredPosts.length} post${filteredPosts.length > 1 ? 's' : ''}.`)
        if (!filteredPosts.length) setResult(`No posts found, try again.`)
    }, [filteredPosts])

    return (
        <ListingStyled>
            <div id="top" className="backImage">
                <Link href="/" passHref>
                    <>
                        <Image src="/back-button.png" width="50" height="50" alt="Back" />
                    </>
                </Link>
            </div>

            <h1>{h1}</h1>

            <div className="listingOptions">
                <div className="listingSearch">
                    <Image src="/search.png" width="33px" height="10px" />
                    <input placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className="listingSearch">
                    <Image src="/author.png" width="33px" height="10px" />
                    <input placeholder="Filter by author" value={filter} onChange={(e) => setFilter(e.target.value)} />
                </div>
                {(search || filter) && <div className="listingSearch result">{result}</div>}
            </div>

            <div className="listingCards">
                {' '}
                {filteredPosts.map((post) => (
                    <Card
                        key={post.id}
                        hello={hello}
                        post={post}
                        comments={filterCommentsByPost(comments, post)}
                        author={findAuthor(authors, post)}
                        linkHref="/posts/[id]"
                        linkAs={`/posts/${post.id}`}
                        linkLabel="Read more"
                    />
                ))}
            </div>
            <a className="backImage right" href="#top">
                <Image src="/up-arrow.png" width="50" height="50" alt="To top" />
            </a>
        </ListingStyled>
    )
}

Listing.propTypes = {
    hello: PropTypes.string.isRequired,
    h1: PropTypes.string.isRequired,
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number
        })
    ).isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number
        })
    ).isRequired,
    authors: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number
        })
    ).isRequired
}

export default Listing
