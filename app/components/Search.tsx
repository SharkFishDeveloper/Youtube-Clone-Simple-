import React from 'react'

const Search = () => {
    return <div >
        {/* className="w-2/4" */}
    <form>
        <div className="w-[90%] sm:w-[550px] flex text-gray-900 border border-gray-500 rounded-3xl p-1 pl-3 text-sm pr-2">
            <input  id="default-search" className="w-full bg-black text-white border-none outline-none focus:border-blue-500" placeholder="Search" required />
            <button className="bg-black text-gray-400 font-bold py-2 px-4  inline-flex items-center border-l border-gray-400">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </button>
        </div>
    </form>
</div>
}

export default Search