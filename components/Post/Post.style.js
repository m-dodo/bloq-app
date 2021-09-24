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

    '.postAuthor': {
        background: 'linear-gradient(white 50%, gold 50%)',
        fontWeight: 'bold'
    }
})

export default style
