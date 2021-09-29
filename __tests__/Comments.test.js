/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Comments from '../components/Comments/Comments.component'

const mockComments = [
    {
        postId: 1,
        id: 1,
        name: 'name 1',
        email: 'e@mail.com',
        body: 'text 1'
    },
    {
        userId: 2,
        id: 2,
        name: 'name 2',
        email: 'f@mail.com',
        body: 'text 2'
    }
]

describe('Comments', () => {
    it('renders component', () => {
        render(<Comments hello="Hello" comments={mockComments} />)

        const title = screen.getByRole('button', {
            name: 'See comments'
        })

        expect(title).toBeInTheDocument()
    })
})
