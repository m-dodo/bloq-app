const style = () => ({
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
    fontFamily: 'Courier New',

    h1: {
        fontSize: 72,
        padding: '0px 10px',
        width: 'fit-content',
        background: 'linear-gradient(white 50%, gold 50%)',
        '@media (max-width: 420px)': {
            fontSize: 42
        }
    },

    '& .homepageCta': {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'lightgray',
        padding: '20px 30px',
        maxWidth: '1000px',
        borderRadius: '10px',

        '@media (max-width: 420px)': {
            flexDirection: 'column'
        }
    },

    '& .ctaContent': {
        padding: '50px',

        '@media (max-width: 420px)': {
            padding: '10px'
        },

        '& .ctaButton': {
            marginTop: '90px',
            backgroundColor: 'gold',
            padding: '12px',
            width: 'fit-content',
            cursor: 'pointer',
            borderRadius: '10px'
        }
    },

    '& footer': {
        position: 'fixed',
        margin: '0 auto',
        bottom: 20
    }
})

export default style
