import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Card from '../Card/Card.component'

import style from './Listing.style'

const ListingStyled = styled.div(() => ({ ...style() }))

const filterCommentsByPost = (comments, post) => {
    const postComments = []
    comments.forEach((comment) => {
        if (comment.postId === post.id) postComments.push(comment)
    })

    return postComments
}

const findAuthor = (authors, post) => {
    return authors.find((author) => author.id === post.userId)
}

const Listing = ({ hello, h1, posts, comments, authors }) => {
    console.log(hello, 'Listing component')

    const [postsToShow, setPostsToShow] = useState(posts)
    const [searchedPosts, setSearchedPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('')
    const [result, setResult] = useState('')

    useEffect(() => {
        setSearchedPosts(postsToShow.filter((post) => post.title.includes(search.toLowerCase())))
        setPostsToShow(searchedPosts)
    }, [search, searchedPosts, postsToShow])

    useEffect(() => {
        setFilteredPosts(
            postsToShow.filter((post) => {
                const filteredAuthors = authors.filter((author) =>
                    author.name.toLowerCase().includes(filter.toLowerCase())
                )
                if (filteredAuthors.find((author) => author.id === post.userId)) return true
                return false
            })
        )
        setPostsToShow(filteredPosts)
    }, [filter, filteredPosts, authors, postsToShow])

    useEffect(() => {
        if (postsToShow.length) setResult(`Found ${postsToShow.length} post${postsToShow.length > 1 ? 's' : ''}.`)
        if (!postsToShow.length) setResult(`No posts found, try again.`)
    }, [postsToShow])

    return (
        <ListingStyled>
            <div className="backImage">
                <Link href="/" passHref>
                    <Image src="/back-button.png" width="50" height="50" alt="Back" />
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
                {posts.map((post) => (
                    <Card
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
