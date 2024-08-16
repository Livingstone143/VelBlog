import React from 'react'

function Model({children}) {
  return (
    <>
    <div className='bg-white/50 fixed inset-0 z-10 '></div>
    {children}</>
  )
}

export default Model