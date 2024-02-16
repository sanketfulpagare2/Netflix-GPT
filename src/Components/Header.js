import React from 'react'
import { LOGO } from '../utils/constants'

const Header = () => {
  return (
    <div  className=" header absolute px-8 py-2 z-10 ">

        <img className='w-48' src={LOGO}
        alt='logo'></img>

    </div>
  )
}

export default Header