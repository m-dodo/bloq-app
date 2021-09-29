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
        '@media (max-width: 620px)': {
            fontSize: 42
        }
    },

    h2: {
        fontSize: 40
    },

    '& .homepageCta': {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'lightgray',
        padding: '20px 30px',
        maxWidth: '1000px',
        borderRadius: '5px',

        '@media (max-width: 620px)': {
            flexDirection: 'column'
        }
    },

    '& .ctaContent': {
        padding: '0px 50px',
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'space-between',

        '@media (max-width: 620px)': {
            padding: '10px'
        },

        '& .ctaButton': {
            background: 'linear-gradient(lightgray 50%, gold 50%)',
            fontWeight: 'bold',
            fontSize: '18px',
            padding: '5px',
            marginLeft: '-2px',
            width: 'fit-content',
            cursor: 'pointer',

            ':hover': {
                background: 'gold'
            }
        }
    },

    '& footer': {
        position: 'fixed',
        margin: '0 auto',
        bottom: 20
    }
})

export default style
