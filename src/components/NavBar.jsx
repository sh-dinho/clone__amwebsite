import React from 'react'
import {navLinks} from "../constants/index.js";

const NavBar = () => {
    return <nav>
        <img src="/logo.svg" alt=" Applelogo" />

        <ul>
            {navLinks.map(({label}) =>(
                <li key={label}>
                    <a href={label}>{label}</a>
                </li>
            ))}

        </ul>

        <div className="flex-center gap-3">
            <button>
                <img src="/search.svg" alt="Search" />
            </button>

            <button>
                <img src="/cart.svg" alt="Cart" />
            </button>
        </div>
    </nav>
}
export default NavBar
