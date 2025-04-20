"use client"
import { Button } from '@/components/ui/button';
import { supabase } from '@/services/supabaseClient';
import Image from 'next/image';
import React from 'react';

function login() {
    const signInWithGoogle = async() => {
        const {error} =await supabase.auth.signInWithOAuth({
            provider: 'google'
        })

        if (error) {
            console.error('Error signing in with Google:', error.message);
        }
    }
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className='flex flex-col items-center border rounded-2xl p-15'>
                <Image src=  {'/logo/Artificial voice-Photoroom.jpg'} 
                alt='logo' 
                width={400} 
                height={100} 
                className='w-[180px] rounded-2xl' />
                <div>
                    <Image src={'/login.jpg'} alt='login'
                    width = {600}
                    height = {400}
                    className='w-[400px] h-[250]'
                    />
                    <h2 className='text-2xl font-bold text-center mb-2'> Welcome to Artificial Voice </h2>
                    <p className='text-gray-500 text-center mb-4'> Sign In With Google Authentication </p>
                    <Button className='mt-7 w-full' onClick={signInWithGoogle}> 
                    <Image 
                    src={'/google.png'} 
                    alt='Google Logo' 
                    width={20} 
                    height={20} /> 
                    <span> Login with Google </span> 
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default login;