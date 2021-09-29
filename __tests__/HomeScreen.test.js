/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import HomeScreen from '../components/HomeScreen/HomeScreen.component'

describe('HomeScreen', () => {
    it('renders component', () => {
        render(<HomeScreen hello="Hello" h1="Testing" buttonLabel="Button" buttonLink="/" />)

        const title = screen.getByRole('heading', {
            name: 'Testing'
        })

        expect(title).toBeInTheDocument()
    })
})
