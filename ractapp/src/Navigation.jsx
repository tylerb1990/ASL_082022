// Imports 
import React from 'react';
import { Link } from 'react-router-dom';


// Nav Component
class Navigation extends React.Component
{
    render() {
        return(
            <header style={styles.header}>
                <h1>ASL Quiz Generator</h1>
                <ul>
                    <li><Link to="/" style={styles.button}>Quiz Dashboard</Link></li>
                    {this.props.isLoggedIn && <li><Link to="/logout">Logout</Link></li>}
                </ul>
            </header>
        );
    }
}


// CSS Modules
const styles = {
    header: {
        marginBottom: '10rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '.5rem 2rem',
        backgroundColor: 'white'
    },
    button: {
        padding: '1rem 2rem',
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#7018c9',
        borderRadius: '1rem',
        textDecoration: 'none'
    }
}


// Export
export default Navigation;