import React, { useState } from 'react'
import { getVideo } from '../../api/get-video'

function Downloader({setDownloadInfo}) {
  const [url, setURL] = useState("")

  const handleURLInput = (e) => {
    setURL(e.target.value)
  }

  const onClickDownload = async () => {
    setDownloadInfo(202)
    getVideo(url)
      .then(x => {
        setDownloadInfo(x);
      })
      .catch(y => {
        setDownloadInfo(400)
      })
  }

  return (
    <div className='w-full flex justify-center'>
      <div className='w-full flex justify-center gap-5 text-xl'>
        <input onChange={handleURLInput} placeholder='Ex. https://youtube.com/watch?v=D2Sd3S' className='text-lg w-1/3 text-primary p-2 px-5 rounded-xl border-none outline-none' type="text" />
        <button onClick={() => onClickDownload()} className='bg-secondary text-background p-2 px-10 rounded-xl hover:cursor-pointer'>Download</button>
      </div>
    </div>
  )
}

export default Downloader