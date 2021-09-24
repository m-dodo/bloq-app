const style = () => ({
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: '0 auto',
    fontFamily: 'Courier New',

    h1: {
        fontSize: 72,
        '@media (max-width: 420px)': {
            fontSize: 42
        }
    },

    '.ListingCards': {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'spaceAround'
    }
})

export default style
