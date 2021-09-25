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
        '@media (max-width: 420px)': {
            fontSize: 42
        }
    },

    '.listingOptions': {
        display: 'flex',
        flexDirection: 'row',
        gap: '30px',

        '@media (max-width: 700px)': {
            flexDirection: 'column'
        }
    },

    '.listingSearch': {
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',

        input: {
            minWidth: '250px',
            height: '30px',
            border: 'none',
            borderBottom: '1px black solid',
            fontFamily: 'Courier New',
            fontSize: '15px',

            ':hover': {
                borderColor: 'gold'
            }
        }
    },

    '.result': {
        marginTop: '15px'
    }
})

export default style
