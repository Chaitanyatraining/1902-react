import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to='/' class="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/listkeys' class="nav-link">ListsKeys</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/counter' class="nav-link">Counter</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/lifecyclemethods' class="nav-link">Lifecyclemethod</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/pagination' class="nav-link">Pagination</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/usestatehook' class="nav-link">useStateHook</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/useeffecthook' class="nav-link">useEffectHook</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/useeffectpagination' class="nav-link">UseEffectPagination</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/usecontext' class="nav-link">useContextHook</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/usereducer' class="nav-link">UseReducer</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/contactus' class="nav-link">ContactUs</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header