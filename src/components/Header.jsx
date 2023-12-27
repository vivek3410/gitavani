import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react'

export default function Header() {
    const [showMenu, setShowMenu] = React.useState(false);
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
    function MenuClick(){
        setShowMenu(!showMenu);
    }
    return (
        <div className='h-[4em] bg-black w-full flex justify-between items-center px-4'>
            <div className="navbar-brand">
                <span>
                    <a className='hover:no-underline' href="/">Gitavani Tech</a>
                </span>
            </div>
            <div >
                <div className='sm:gap-12 sm:flex mr-4 hidden sm:block'>
                    {routes.map((route) => (
                        // <a key={route.path} className='text-white cursor-pointer' href={route.path}>{route.label}</a>
                        <Link key={route.path} className='hover:no-underline text-white text-none cursor-pointer' to={route.path} >{route.label}</Link>
                    ))}
                </div>
                {/* <FontAwesomeIcon icon="fa-solid fa-bars" width={30} height={30} color='white'/> */}
                {/* <FontAwesomeIcon icon="fa-solid fa-bars" style={{color: "#fcfcfc",}} className='cursor-pointer'/> */}
                <div className='cursor-pointer'>
                    <Menu className='text-white' onClick={() => MenuClick()} />
                </div>
                {showMenu && (
                    <>
                        <div className='absolute z-30 top-[3.5em] right-5 w-1/4  bg-white rounded-xl'>
                        {/* <div className=' text-white absolute right-5 cursor-pointer' onClick={() => setShowMenu(false)}>x</div> */}
                            <div className='flex flex-col gap-4 p-[1em] '>
                                {routes.map((route) => (
                                    <>
                                    <Link key={route.path} className='hover:no-underline text-black text-none cursor-pointer ' to={route.path} >{route.label}</Link>
                                    {/* <hr className='m-0 p-0'/> */}
                                    </>
                                ))}
                            </div>
                        </div>
                    </>
                )}

            </div>
        </div>
    );
}
