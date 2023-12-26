import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const routes = [
        {
            path: "/",
            label: "Home",
        },
        {
            path: "/about",
            label: "About",
        },
        {
            path: "/contact",
            label: "Contact Us",
        }, 
        // {
        //     path: "/whatwedo",
        //     label: "What We Do",
        // },
        // {
        //     path: "/portfolio",
        //     label: "Portfolio",
        // }
    ]
    return (
        // <nav>
        //     <div className='sub_page'>
        //         <div className='hero_area'>
        //             <header class="header_section">
        //                 <div class="container-fluid">
        //                     <nav class="navbar navbar-expand-lg custom_nav-container pt-3">
        //                         <a class="navbar-brand" href="/">
        //                             <span>
        //                                 Gitavani Tech
        //                             </span>
        //                         </a>
        //                         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                             <span class="navbar-toggler-icon"></span>
        //                         </button>
        //                         <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //                             <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
        //                                 <ul class="navbar-nav">
        //                                     {routes.map((route) => (
        //                                         <li className="nav-item" key={route.path}>
        //                                             <a href={route.path}  className='nav-link' >
        //                                                 {route.label}
        //                                             </a>
        //                                         </li>
        //                                     ))}
        //                                 </ul>
        //                                 <div class="user_option">
        //                                     <a href="">
        //                                         <img src="images/user.png" alt="" />
        //                                     </a>
        //                                     <form class="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
        //                                         <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
        //                                     </form>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </nav>
        //                 </div>
        //             </header>
        //         </div>
        //     </div>
        // </nav>
        <div className='h-[4em] bg-black w-full flex justify-between items-center px-4'>
            <div className="navbar-brand">
                <span>
                    <a className='hover:no-underline' href="/">Gitavani Tech</a>
                </span>
            </div>
            <div className='gap-12 flex mr-4'>
                {routes.map((route) => (
                    // <a key={route.path} className='text-white cursor-pointer' href={route.path}>{route.label}</a>
                    <Link key={route.path} className='hover:no-underline text-white text-none cursor-pointer' to={route.path} >{route.label}</Link>
                ))}
            </div>
        </div>
    );
}
