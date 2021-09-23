import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import styled from '@emotion/styled'
import PropTypes from 'prop-types'

// import style from './HomeScreen.style'

// const HomeScreenStyled = styled.div(() => ({ ...style() }))

const HomeScreen = ({ hello }) => {
    console.log(hello, 'HomeScreen component')
    return (
        <>
            <main>
                <h1 className="homepageTitle">BloQ</h1>
                <div className="homepageCta">
                    <Image src="/reader.jpg" width="400" height="270" alt="Coffee photo created by wayhomestudio" />
                    <div>
                        <h2>Posts</h2>
                        <p>Wanna read some awesome posts?</p>
                        <Link href="/posts">Click here</Link>
                    </div>
                </div>
            </main>

            <footer>Learning app</footer>
        </>
    )
}

export default HomeScreen

HomeScreen.propTypes = {
    hello: PropTypes.string.isRequired
}
