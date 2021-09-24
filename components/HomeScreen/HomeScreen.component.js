import Image from 'next/image'
import Link from 'next/link'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import style from './HomeScreen.style'

const HomeScreenStyled = styled.div(() => ({ ...style() }))

const HomeScreen = ({ hello }) => {
    console.log(hello, 'HomeScreen component')
    return (
        <HomeScreenStyled>
            <main>
                <h1 className="homepageTitle">BloQ</h1>
                <div className="homepageCta">
                    <Image
                        className="ctaImage"
                        src="/reader.jpg"
                        width="400"
                        height="270"
                        alt="Coffee photo created by wayhomestudio"
                    />
                    <div className="ctaContent">
                        <h2>Posts</h2>
                        <p>Hi, wanna read some awesome posts?</p>
                        <Link href="/posts" passHref>
                            <div className="ctaButton">Click here</div>
                        </Link>
                    </div>
                </div>
            </main>

            <footer>Test app for Q</footer>
        </HomeScreenStyled>
    )
}

export default HomeScreen

HomeScreen.propTypes = {
    hello: PropTypes.string.isRequired
}
