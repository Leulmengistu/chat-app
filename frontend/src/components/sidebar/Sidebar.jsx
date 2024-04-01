import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

function Sidebar() {
  return (
    <div className='border-r boder-slate-500 h-full flex flex-col p-2'>
      <SearchInput />
      <div className='divider divider-neutral px-3'></div>
      <Conversations />
    <LogoutButton />
</div>
  )
}

export default Sidebar