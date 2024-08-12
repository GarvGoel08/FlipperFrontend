import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#0b0c19] flex flex-row items-center justify-between px-8 text-white text-center p-3">
      <p className='text-base'>© 2024 Flipper</p>
        <div className="flex flex-row gap-5">
            <a target='_blank' href="https://github.com/GarvGoel08">
            <img className='h-5' src="https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff" />
            </a>
            <a target='_blank' href="https://www.linkedin.com/in/garvgoel2908/">
            <img className='h-5' src="https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF" />
            </a>
            <a target='_blank' href="https://www.instagram.com/garvgoel6/">
            <img className='h-5' src="https://img.icons8.com/?size=100&id=32309&format=png&color=FFFFFF" />
            </a>
        </div>
    </footer>
  )
}
