// Imports
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import queryString from 'querystring';


// Home App
const Home = () => {
    const [quizzes, setQuizzes] = useState([]);
    useEffect(() => {
        async function fetchQuizzes() {
            const params = queryString.parse(window.location.search.replace(/^\?/, ''));
            const response = await axios('http://localhost:3000/quizzes', {
                headers: {
                    token: localStorage.token
                }
            })
            setQuizzes(response.data);
        }
        fetchQuizzes();
    }, []);

    return (
        <div style={styles.outer_wrap}>
            <div style={styles.inner_wrap}>
                <div style={styles.circlewrap}>
                    <div style={styles.red_circle}></div>
                    <div style={styles.yellow_circle}></div>
                    <div style={styles.green_circle}></div>
                </div>
            </div>
            <h1 style={styles.h1}>Pick a quiz below to take it.</h1>
            <ul>
                {quizzes.map(q => (
                    <li>
                        <Link to = { '/quizzes/' + q.id }>{q.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}


// CSS Modules
const styles = {
    outer_wrap: {
        width: '40%',
        margin: '0 auto',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: '1rem',
        boxShadow: '10px 10px 20px 0px rgba(0,0,0,0.5)',
        webkitBoxShadow: '10px 10px 20px 0px rgba(0,0,0,0.25)',
        mozBoxShadow: '10px 10px 20px 0px rgba(0,0,0,0.25)'
    },
    inner_wrap: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start'
    },
    circlewrap: {
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
        textAlign: 'left'
    },
    p: {
        width: '80%',
        marginBottom: '3rem',
        textAlign: 'left'
    },
}


// Export
export default Home;