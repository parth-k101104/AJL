"use client"

import Image from "../../node_modules/next/image"
import { useState } from "react"
import Link from "../../node_modules/next/link"

const Menu = () => {

    const [open, setOpen] = useState(false)
 
    return (
      <div className=''>
        <Image src="/menu.png" alt="" width={28} height={28} className="cursor-pointer" onClick={() => setOpen((prev) => !prev)}/>
        {
          open && (
            <div className="absolute bg-brand text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
              <Link href="/">Home</Link>
              <Link href="/">Shop</Link>
              <Link href="/">Deals</Link>
              <Link href="/">About</Link>
              <Link href="/">Contact Us</Link>
              <Link href="/">Cart(1)</Link>
            </div>
          )
        }
      </div>
    )
  }
  
  export default Menu