import React from 'react'

function Downloader() {
  return (
    <div className='w-full flex justify-center'>
        <div className='w-full flex justify-center gap-5 text-xl'>
            <input placeholder='Ex. https://youtube.com/watch?v=D2Sd3S' className='text-lg w-1/3 text-primary p-2 px-5 rounded-xl border-none outline-none' type="text" />
            <button className='bg-secondary text-background p-2 px-10 rounded-xl hover:cursor-pointer'>Download</button>
        </div>
    </div>
  )
}

export default Downloader