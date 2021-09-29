const style = () => ({
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: '0 auto',
    fontFamily: 'Courier New',

    '.backImage': {
        cursor: 'pointer',
        borderRadius: '50%',
        padding: '0px 3px 1px 0px',
        marginTop: 10,

        ':hover': {
            backgroundColor: 'gold'
        }
    },

    h1: {
        fontSize: 72,
        '@media (max-width: 620px)': {
            fontSize: 42
        }
    },

    '.postAuthor': {
        background: 'linear-gradient(white 50%, gold 50%)',
        fontWeight: 'bold'
    }
})

export default style
