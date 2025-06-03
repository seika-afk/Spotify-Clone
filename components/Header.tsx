"use client"; 
import { twMerge } from 'tailwind-merge';
import React from 'react'
import {useRouter} from "next/navigation"; 
import {RxCaretLeft, RxCaretRight} from "react-icons/rx"
import {HiHome} from "react-icons/hi"
import { BiSearch } from 'react-icons/bi';
import Button from './Button';
import useAuthModal from '@/hooks/useAuthModal';
import { useSupabaseClient, } from '@supabase/auth-helpers-react';
import { useUser } from "@/hooks/useUser"; 
import { FaUserAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';


interface HeaderProps  {
    children: React.ReactNode; 
    className?: string; 
}

const Header: React.FC<HeaderProps> = ({
    children,
    className
}) => {
    const authModal = useAuthModal(); 
    const router = useRouter();

    const supabaseClient = useSupabaseClient(); 
    const { user, subscription } = useUser(); 



    const handleLogout = async () => {
        const { error } = await supabaseClient.auth.signOut(); 
        // TODO: Reset any playing songs 
        router.refresh(); 
        //Handle Logout function 

        if (error) { 
          toast.error(error.message);
        } else { 
            toast.success('Logged Out')
        }
    }

  return (
    <div
    className={twMerge(`
        h-fit
        bg-gradient-to-b
        from-emerald-800
        p-6`,
            className

    )}
    >
        <div className='
        w-full
        mb-4
        flex
        items-center
        justify-between'>
            <div className='
            hidden
            md:flex
            gap-x-2
            items-center'>
                <button onClick={() => router.back()}
                        className='
                            rounded-full
                            bg-black
                            flex
                            items-center
                            justify-center
                            hover:opacity-75
                            transition'>
                     <RxCaretLeft size={35}
                                  className="text-white" /> 
                     
                </button>
                <button onClick={() => router.forward()}
                        className='
                            rounded-full
                            bg-black
                            flex
                            items-center
                            justify-center
                            hover:opacity-75
                            transition'>
                     <RxCaretRight size={35}
                                  className="text-white" /> 
                     
                </button>
                
            </div>
            <div className='flex md:hidden gap-x-2 item-center'>
                <button 
                    className='
                    rounded-full
                    p-2
                    bg-white
                    flex
                    items-center
                    justify-center
                    hover:opacity-75
                    transition'
                >
                    <HiHome className="text-black"></HiHome>
                </button>
                <button 
                    className='
                    rounded-full
                    p-2
                    bg-white
                    flex
                    items-center
                    justify-center
                    hover:opacity-75
                    transition'
                >
                    <BiSearch className="text-black"></BiSearch>
                </button>
            </div>
            
           
            <div className='
                    flex
                    justify-between
                    items-center
                    gap-x-4'
                    
            >
            {/* Dynamic Content if you're logged in or logged out */}
           
           { user ? (
            <div className='flex gap-x-4 items-center'> 
                
            <Button
            onClick={handleLogout}
            className="bg-white px-6 py-2"
            > 
                Logout 
            </Button>
            <Button
             onClick={() => router.push("/account")}
             className='bg-white'
            >
                <FaUserAlt/>
            </Button>
            
            </div>
           )  : ( 
           
           
            <>
        
            <div>
                <Button 
                onClick={authModal.onOpen}
                className='bg-transparent
                           text-neutral-300
                           font-medium'         
                >
                Sign Up
                </Button>
            </div> 
            <div>
                <Button 
                onClick={authModal.onOpen}
                className='bg-white
                           px-6
                           py-2'         
                >
                Log In
                </Button>
            </div> 
            
            </>
           )} 
            </div>
        </div>
        {children}
    </div> 
  )
}

export default Header

