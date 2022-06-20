import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Navbar({ goBack }) {
    const navigate = useNavigate();

    return (
        <nav>
            {
                goBack &&
                <button onClick={() => navigate(-1)}>Go back</button>
            }
            <a href="https://github.com/adityakemal" target={`__blank`}>
                Find me &nbsp; ➡️
            </a>
        </nav>
    )
}
