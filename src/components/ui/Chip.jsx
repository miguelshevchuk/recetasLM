import {React, useState} from 'react'

export const Chip = ({texto}) => {
//<button className="btn closebtn" >&times;</button>

  return (
    <div className='chip mt-2 '>
        {texto}
        
    </div>
  )
}
