/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from '../components/Card/Card.component'

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

describe('Card', () => {
    it('renders component', () => {
        render(
            <Card
                hello="Hello"
                post={{
                    userId: 1,
                    id: 1,
                    title: 'title',
                    body: 'text'
                }}
                author={{
                    id: 1,
                    name: 'name',
                    email: 'e@mail.com'
                }}
                comments={mockComments}
                linkLabel="Button"
                linkAs="/"
                linkHref="/"
            />
        )

        const image = screen.getByRole('img', {
            name: 'Article'
        })

        const title = screen.getByRole('heading', {
            name: 'title'
        })

        expect(image).toBeInTheDocument()
        expect(title).toBeInTheDocument()
    })
})
