/* eslint-disable no-console */
import Image from 'next/image'
import Link from 'next/link'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import style from './HomeScreen.style'

const HomeScreenStyled = styled.div(() => ({ ...style() }))

const HomeScreen = ({ hello, h1, ctaTitle, ctaLabel, buttonLabel, buttonLink }) => {
    console.log(hello, 'HomeScreen component')
    return (
        <HomeScreenStyled>
            <main>
                <h1 className="homepageTitle">{h1}</h1>
                <div className="homepageCta">
                    <Image className="ctaImage" src="/imagePlaceholder.png" width="400" height="270" alt="Image" />
                    <div className="ctaContent">
                        <h2>{ctaTitle}</h2>
                        <p>{ctaLabel}</p>
                        <Link href={buttonLink} passHref>
                            <div className="ctaButton">{buttonLabel}</div>
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
    hello: PropTypes.string.isRequired,
    h1: PropTypes.string.isRequired,
    ctaTitle: PropTypes.string,
    ctaLabel: PropTypes.string,
    buttonLabel: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired
}

HomeScreen.defaultProps = {
    ctaTitle: '',
    ctaLabel: ''
}
