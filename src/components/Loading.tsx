import { PacmanLoader } from 'react-spinners'; 

const Loading = () => {
  return (
    <div className='w-40 mt-240 mx-auto '>
      <PacmanLoader 
        color="#4E3ABA"
        size={40}
      />
      <p className='text-36 text-darkgray mt-5'>Loading...</p>
    </div>
  )
}

export default Loading