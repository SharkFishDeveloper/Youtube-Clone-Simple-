import React from 'react'

const SideBarContent = () => {
  return (
    <div className="flex flex-col gap-y-4 text-sm">
        <div className="h-[2.3rem] rounded-lg hover:bg-gray-700 px-2 flex items-center">Home</div>
        <div className="h-[2.3rem] rounded-lg hover:bg-gray-700 px-2 flex items-center">Subscriptions</div>
        <div className="h-[2.3rem] rounded-lg hover:bg-gray-700 px-2 flex items-center">Shorts</div>
        <div className="h-[2.3rem] rounded-lg hover:bg-gray-700 px-2 flex items-center">YouTube music</div>
        <div className="h-[2.3rem] rounded-lg hover:bg-gray-700 px-2 flex items-center">Your channel</div>
        <div className="h-[2.3rem] rounded-lg hover:bg-gray-700 px-2 flex items-center">History</div>
        <div className="h-[2.3rem] rounded-lg hover:bg-gray-700 px-2 flex items-center">Watch later</div>
        <div className="h-[2.3rem] rounded-lg hover:bg-gray-700 px-2 flex items-center">Downloads</div>

    </div>
  )
}

export default SideBarContent