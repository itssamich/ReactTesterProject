import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import StarWars from './StarWars'

export default function MainList(){

    return(
        <>
            <main className='mainContent'>
                <Switch>
                    <Route path ='/starwars'>
                        <StarWars />
                    </Route>
                    <redirect from ='/' to ='/starwars' />
                </Switch>
            </main>
        
        </>
    )
}