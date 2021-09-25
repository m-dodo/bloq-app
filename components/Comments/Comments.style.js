const style = () => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    fontFamily: 'Courier New',
    fontSize: 14,

    button: {
        fontFamily: 'Courier New',
        background: 'linear-gradient(lightgray 50%, gold 50%)',
        fontWeight: 'bold',
        border: 'none',
        fontSize: 15,
        cursor: 'pointer',
        alignSelf: 'flex-end',

        ':hover': {
            background: 'gold'
        }
    },

    '.hide': {
        float: 'right'
    },

    '.commentAuthor': {
        fontWeight: 'bold'
    },

    '.comment': {
        maxWidth: '1000px'
    }
})

export default style
