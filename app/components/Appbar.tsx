import React from 'react'
import Search from './Search'

export const Appbar = () => {
  return (
    <div className="flex justify-between p-2 items-center gap-2">
        <div className="align-middle">Youtube</div>
        <div><Search/></div>
        <div>Signin</div>

    </div>
  )
}
