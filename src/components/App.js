import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import MainList from './MainList'


export default function Main(){


    return(
        <Router>
            <div className='headerContainer'>
                <h1>Tester</h1>
            </div>
            <MainList />
        </Router>
    )
}