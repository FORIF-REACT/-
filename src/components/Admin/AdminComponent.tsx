import React from 'react'
import Button from '../ui/button'

const Admin = () => {
  return (
    <div className='w-480 h-14 px-2 flex gap-2 items-center bg-lightblue shadow-md'>
      <div className="w-9 h-9 rounded-full border-ring border-2">
        <div className="box-border w-7 h-7 bg-slate-400 rounded-full m-0.5"></div>
      </div>
      <p className='text-start text-12 grow'>닉네임</p>
      <Button variant="slate" size="sm" >삭제</Button>
    </div>
  )
}

export default Admin