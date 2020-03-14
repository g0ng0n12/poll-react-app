import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavComponent() {
    return(
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='new' activeClassName='active'>
                        New Question
                    </NavLink>
                </li>
                <li>
                    <NavLink to='leaderboard' activeClassName='active'>
                        LeaderBoard
                    </NavLink>
                </li>
            </ul>
            {/* TO-DO get The name of the user logged in and add the phrase with avatar */}
            <NavLink to='logout' className='profile'>
                Logout
            </NavLink>
        </nav>
    )
}
