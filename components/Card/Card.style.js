const style = () => ({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'lightgray',
    padding: '20px 30px',
    margin: '25px 0px',
    maxWidth: '1400px',
    borderRadius: '10px',

    '.cardContent': {
        display: 'flex',
        flexDirection: 'row',

        '@media (max-width: 620px)': {
            flexDirection: 'column'
        }
    },

    Image: {
        minWidth: '40%'
    },

    hr: {
        border: '1px solid gray',
        width: '100%'
    },

    '.cardText': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: '10px 30px 5px 30px',
        maxWidth: '60%',
        cursor: 'pointer',

        '@media (max-width: 620px)': {
            padding: '5px',
            maxWidth: '100%'
        }
    },

    '& .cardButton': {
        backgroundColor: 'gold',
        padding: '12px',
        marginLeft: '-2px',
        width: 'fit-content',
        borderRadius: '10px',
        cursor: 'pointer',

        '@media (max-width: 420px)': {
            marginTop: '35px'
        }
    }
})

export default style
