import React from 'react'
import Apps from './Apps'
import Profile from './Profile'

export default function NavUL() {
    return (
        <nav class="user-navigation">
            <ul>
                <Apps />
                <Profile />
            </ul>
        </nav>

    )
}
