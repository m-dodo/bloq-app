const style = () => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    padding: '20px 30px',
    margin: '25px 0px',
    maxWidth: '1000px',
    borderRadius: '10px',

    '@media (max-width: 420px)': {
        flexDirection: 'column'
    },

    '.cardText': {
        padding: '20px 30px',
        maxWidth: 600,
        cursor: 'pointer',

        '@media (max-width: 420px)': {
            padding: '15px'
        }
    },

    '& .cardButton': {
        marginTop: '95px',
        backgroundColor: 'gold',
        padding: '12px',
        width: 'fit-content',
        borderRadius: '10px',
        cursor: 'pointer',

        '@media (max-width: 420px)': {
            marginTop: '35px'
        }
    }
})

export default style
