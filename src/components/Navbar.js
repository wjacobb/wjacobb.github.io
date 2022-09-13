import React, { useState } from 'react'

const Navbar = () => {
    let Links =[
        {name:"PROFILE",link:"/"},
        {name:"RESUME",link:"/"},
        {name:"PROJECTS",link:"/"},
        {name:"CONTACT",link:"/"},
    ];
    let [open,setOpen] = useState(false);
    return (
        <div className='shadow-md w-full sticky top-0 left-0 z-30'>
            <div className='md:flex items-center justify-between bg-gray-900 py-4 md:px-10 px-7'>                
                <div onClick={()=>setOpen(!open)} className='text-3xl text-white duration-500 items-center left-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close':'menu'}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center absolute md:static bg-gray-900 md:z-[20] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-18':'top-[-490px]'}`}>
                    {
                        Links.map((link)=>(
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-6'>
                                <a href={link.link} className='text-white duration-500'>{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
export default Navbar;