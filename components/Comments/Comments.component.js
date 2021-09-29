/* eslint-disable no-console */
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { useState } from 'react'

import style from './Comments.style'

const CommentsStyled = styled.div(() => ({ ...style() }))

const Comments = ({ hello, comments }) => {
    console.log(hello, 'Comments component')

    const [showComments, setShowComments] = useState(false)

    return (
        <CommentsStyled>
            {!showComments && <hr />}
            {!showComments && (
                <button type="button" className="commentsToggle" onClick={() => setShowComments(true)}>
                    See comments
                </button>
            )}
            {showComments && (
                <div className="commentsContainer">
                    {comments.map((comment) => (
                        <div className="comment">
                            <p className="commentAuthor">{comment.email} says:</p>
                            <p>{comment.body}</p>
                            <hr />
                        </div>
                    ))}
                    <button type="button" className="commentsToggle hide" onClick={() => setShowComments(false)}>
                        Hide comments
                    </button>
                </div>
            )}
        </CommentsStyled>
    )
}

export default Comments

Comments.propTypes = {
    hello: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number
        })
    ).isRequired
}
