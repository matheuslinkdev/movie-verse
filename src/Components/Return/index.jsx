import React from 'react'
import { Link } from 'react-router-dom'

const Return = ({destinyRoute}) => {
  return (
    <Link to={destinyRoute} className='return-link'>↩Return</Link>
  )
}

export default Return