import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="bg-[#0b0c19] flex flex-row items-center justify-between px-4 text-white text-center p-2.5">
      <Link
        to={"/"}
        className="flex flex-row items-center gap-3 underline font-semibold"
      >
        <img src="/img/Logo.png" width={34} height={34} />
        Flipper
      </Link>
    </div>
  )
}
