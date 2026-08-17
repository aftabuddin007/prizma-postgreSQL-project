
"use client"
import { Menu, Search, ShoppingBagIcon, ShoppingCart, X,  } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { SignedIn } from '@clerk/nextjs'

const Navbar = () => {
  const cart  = [1,2,3];
  const [menuOpen,setMenuOpen]=useState(false)
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur ">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* left section of navbar */}
        <div className="flex items-center space-x-4 md:space-x-6">
<Link href={"/"} className='font-bold text-lg'>Food Cart</Link>
{/* menu item for desktop */}
<nav className="hidden md:flex items-center space-x-6">

<Link href={"/"} className='text-sm font-medium'>Home</Link>
<Link href={"/menu"} className='text-sm font-medium'>Menu</Link>
<Link href={"/about"} className='text-sm font-medium'>About</Link>
<Link href={"/admin"} className='text-sm font-medium'>Admin</Link>

</nav>
</div>
{/* right section of navbar */}
<div className="flex items-center space-x-3 md:space-x-4">
  <div className="relative hidden sm:block">
    <Search className='mt-2 absolute left-3 top-1/3 -translate-y-1/2 h-4 w-4 text-muted-foreground'></Search>
    <Input placeholder='Search menu...' className='pl-10 w-[160px] md:w-[250px]'></Input>
  </div>
  {/* cart  */}
  <Link href={"/cart"} className='text-sm font-medium relative'>
  <Button variant={"ghost"} className='relative h-10 w-10 rounded-full'>
    <ShoppingCart className='h-5 w-5'></ShoppingCart>
    {
      cart.length > 0 && (
 <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center ">{cart.length}</span>
      )
    }
   
    <span className="sr-only">Cart</span>
  </Button></Link>
  {/* user auth */}
 {/* <SignedIn>

 </SignedIn> */}

 {/* mobile device */}
 <Button size={"icon"} variant={"ghost"} onClick={()=> setMenuOpen(!menuOpen)} className="md:hidden focus:outline ">
{menuOpen ?<X className='h-5 w-5'></X>: <Menu className='h-5 w-5'></Menu>}
 </Button>
{menuOpen && (
  <div className="absolute top-16 left-0 w-full bg-background/95 backdrop-blur px-4 py-2  md:hidden">
    <nav className="flex flex-col items-center space-y-4 py-4">
      <Link href="/" className="text-sm font-medium">Home</Link>
      <Link href="/menu" className="text-sm font-medium">Menu</Link>
      <Link href="/about" className="text-sm font-medium">About</Link>
      <Link href="/admin" className="text-sm font-medium">Admin</Link>
      
    <Search></Search>
    </nav>
  </div>

)}
</div>
      </div>
    </header>
  )
}

export default Navbar
