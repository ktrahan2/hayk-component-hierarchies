import React from 'react'
import Logo from './Logo'
import SearchForm from './SearchForm'
import NavUL from './NavUL'

export default function PrimaryNav() {
    return (
        <div className="primary-navigation">
            <Logo /> 
            {/* nothing inside */}
            <SearchForm />
            {/* nothing inside */}
            <NavUL />
            {/* add Apps and Profile.  */}
        </div>
    )
}
