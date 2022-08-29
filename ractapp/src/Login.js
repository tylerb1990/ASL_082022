// Imports
import React from 'react';


// Login Component
class Login extends React.Component
{
    render() {
        return(
            <div style={styles.login_wrap}>
                <div style={styles.login_innerwrap}>
                    <div style={styles.login_circlewrap}>
                        <div style={styles.red_circle}></div>
                        <div style={styles.yellow_circle}></div>
                        <div style={styles.green_circle}></div>
                    </div>
                </div>
                <h1 style={styles.h1}>Welcome to the ASL Quiz Generator!</h1>
                <p style={styles.p}>To take a quiz please login with your GitHub account below!</p>
                <a href='https://github.com/login/oauth/authorize?client_id=78ad586721277b6a3874' style={styles.button}>Login in with GitHub</a>
            </div>
        )
    }
}


// CSS Modules
const styles = {
    login_wrap: {
        width: '33%',
        margin: '5rem auto 0',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: '1rem',
        boxShadow: '10px 10px 20px 0px rgba(0,0,0,0.5)',
        webkitBoxShadow: '10px 10px 20px 0px rgba(0,0,0,0.25)',
        mozBoxShadow: '10px 10px 20px 0px rgba(0,0,0,0.25)'
    },
    login_innerwrap: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start'
    },
    login_circlewrap: {
        width: '12%',
        display: 'flex'
    },
    red_circle: {
        height: '.75rem',
        width: '.75rem',
        marginRight: '.5rem',
        borderRadius: '50%',
        backgroundColor: 'red'
    },
    yellow_circle: {
        height: '.75rem',
        width: '.75rem',
        marginRight: '.5rem',
        borderRadius: '50%',
        backgroundColor: 'orange'
    },
    green_circle: {
        height: '.75rem',
        width: '.75rem',
        borderRadius: '50%',
        backgroundColor: 'green'
    },
    h1: {
        width: '80%',
    },
    p: {
        width: '80%',
        marginBottom: '3rem',
        textAlign: 'center'
    },
    button: {
        padding: '1rem 2rem',
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#7018c9',
        borderRadius: '1rem',
        textDecoration: 'none',
        boxShadow: '5px 5px 5px 0px rgba(0,0,0,0.5)',
        webkitBoxShadow: '5px 5px 15px 0px rgba(0,0,0,0.25)',
        mozBoxShadow: '5px 5px 5px 0px rgba(0,0,0,0.25)'
    }
}


// Export
export default Login;