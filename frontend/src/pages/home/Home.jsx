import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer';
import { useMobileContext } from '../../context/MobileContext';
function Home () {

  const {chatView} = useMobileContext()
  return (
    <>
      <div className='hidden md:flex  sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 
      bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 '>
        <Sidebar />
        <MessageContainer />

      </div>

      <div className='md:hidden flex h-[550px] rounded-lg overflow-hidden bg-gray-400 
          bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 '>
        
        <div className={`${chatView?'':'hidden'}`}>
          <Sidebar />
        </div>
        <div className={`${chatView?'hidden':''}`}>
          <MessageContainer />
        </div>
        

      </div>

    </>
    
  )
}

export default Home

