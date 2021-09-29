/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Post from '../components/Post/Post.component'

describe('Post', () => {
    it('renders component', () => {
        render(
            <Post
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
            />
        )

        const title = screen.getByRole('heading', {
            name: 'title'
        })

        expect(title).toBeInTheDocument()
    })
})
