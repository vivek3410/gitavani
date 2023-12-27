import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react'
import React from 'react';

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
    function MenuClick() {
        setShowMenu(!showMenu);
    }

    // useEffect(() => {
    //     const handleResize = () => {
    //       // Set showMenu to false when the screen size is greater than or equal to 600px (adjust as needed)
    //       if(showMenu && window.innerWidth > 640){
    //         setShowMenu(false);
    //       }
    //     };
    //     handleResize();
    //     window.addEventListener('resize', handleResize);
    //     return () => {
    //       window.removeEventListener('resize', handleResize);
    //     };
    //   }, []);
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
                        <div className='cursor-pointer block sm:hidden'>
                            <Menu className='text-white' onClick={() => MenuClick()} />
                        </div>
                        {showMenu ? (
                            <>
                                <div className='block sm:hidden  absolute shadow-2xl z-30 top-[3.5em] right-5 w-[10em] sm:w-1/4  bg-white rounded-xl'>
                                    <div className='flex flex-col gap-4 p-[1em] '>
                                        {routes.map((route) => (
                                            <>
                                                <Link key={route.path} className='hover:no-underline text-black text-none cursor-pointer ' to={route.path} >{route.label}</Link>
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </>
                        ) : null}
            </div>
        </div>
    );
}
