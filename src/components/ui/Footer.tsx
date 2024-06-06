const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className='flex items-center justify-center h-20 bg-darkgray text-white text-12'>
      <p>&copy; {currentYear} Unitto. All rights reserved.</p>
    </footer>
  )
}

export default Footer