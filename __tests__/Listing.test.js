/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Listing from '../components/Listing/Listing.component'

const mockPosts = [
    {
        userId: 1,
        id: 1,
        title: 'title 1',
        body: 'text 1'
    },
    {
        userId: 2,
        id: 2,
        title: 'title 2',
        body: 'text 2'
    }
]

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

const mockAuthors = [
    {
        id: 1,
        name: 'name 1',
        email: 'e@mail.com'
    },
    {
        id: 2,
        name: 'name 2',
        email: 'f@mail.com'
    }
]

describe('Listing', () => {
    it('renders component', () => {
        render(
            <Listing
                hello="Hello"
                h1="Testing Listing"
                posts={mockPosts}
                comments={mockComments}
                authors={mockAuthors}
            />
        )

        const title = screen.getByRole('heading', {
            name: 'Testing Listing'
        })

        expect(title).toBeInTheDocument()
    })
})
