import React from 'react'
import "./header.css"
import { Link } from 'react-router'
export default function Header() {


  return (
    <div className='Header'>
      <div className='links'>
        <Link className='Link' to={'/'}>movies</Link>
        <Link className='Link' to={'/favorites'}>favorites</Link>
      </div> 
    </div>
  )
}
