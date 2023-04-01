import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Nav = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'About',
            path: '/about'
        },
        {
            id: 3,
            name: 'Services',
            path: '/services'
        },
        {
            id: 4,
            name: 'Contact',
            path: '/contact'
        },
        {
            id: 5,
            name: 'Blog',
            path: '/blog'
        }
    ]

    return (
        <nav className='bg-cyan-400'>
            
            <div className='md:hidden' onClick={() => setOpen(!open)}>
                <span>
                    {
                    open === true ? <XMarkIcon  className="h-6 w-6 text-black" />
                 : <Bars3Icon  className="h-6 w-6 text-black" />
                 }
                 </span>
            
            </div>

            <ul className={`md:flex gap-5 md:static absolute p-5 bg-cyan-400 ${open ? 'top-6' : '-top-40'} `}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Nav;