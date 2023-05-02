'use client';

import {AiOutlineMenu} from 'react-icons/ai'
import Avatar from '../Avatar';
import MenuItem from './MenuItem';
import { useCallback, useState } from 'react';


const UserMenu = () => {

    const [isOpen, SetIsOpen] = useState(false);

    const toggleOpen = useCallback(()=>{
        SetIsOpen((value)=>!value);
    },[]);



    return ( 
        <div className=" relative">
            <div className='flex flex-row items-center gap-3'>
                <div onClick={()=>{}} 
                    className='hidden md:block text-sm font-semibold py-3 px-4 transition hover:bg-neutral-100 rounded-full cursor-pointer'>
                    FishStay your home
                </div>
                <div onClick={toggleOpen } 
                    className='p-4 
                    md:py-1  
                    md:px-2 
                    border-[1px] 
                    border-neutral-200 
                    flex 
                    flex-row 
                    items-center 
                    gap-3 
                    transition hover:shadow-md cursor-pointer rounded-full'>
                    <AiOutlineMenu/>
                    <div className="hidden md:block">
                    <Avatar/>
                </div>
                </div>
            </div>
            {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40wh] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
                    <div className="flex flex-col cursor-pointer">
                        <>
                            <MenuItem onClick={()=>{}} label='Login'/>
                            <MenuItem onClick={()=>{}} label='Sign Up'/>
                        </>
                    </div>
                </div>
            )}
        </div>
     );
}
 
export default UserMenu;