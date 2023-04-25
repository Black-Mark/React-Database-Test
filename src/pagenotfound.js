import React from 'react'
import { Link } from 'react-router-dom'

export default function Pagenotfound() {
  return (
    <div>
      Page was not Found!
      <div>
      <Link to={'/'}>Back to Listing</Link>
      </div>
    </div>
  )
}
