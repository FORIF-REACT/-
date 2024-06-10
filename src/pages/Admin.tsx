import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/navbar'
import AdminComponent from '@/components/AdminComponent'

import React from 'react'

const Admin = () => {
  return (
    <>
      <Navbar />
      <div className='w-480 mx-auto mt-100 mb-200 flex flex-col gap-8 text-start'>
        <h1 className='h2'>회원 목록</h1>
        <div className='flex flex-col gap-3'>
          <h2 className='text-14'>멘토 목록</h2>
          <AdminComponent />
          <AdminComponent />
        </div>
        <div className='flex flex-col gap-3'>
          <h2 className='text-14'>멘티 목록</h2>
          <AdminComponent />
          <AdminComponent />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Admin