import React from 'react'
import loadingIcon from "./../../assets/loading.svg"
import errorIcon from "./../../assets/error.svg"
import DownloadInfo from './info/DownloadInfo'

function Download({ downloadInfo }) {
  return (
    <div className={`${downloadInfo === 0 ? "max-h-0" : "max-h-96"} transition-all duration-1000 ease-in-out mt-10 flex justify-center overflow-hidden`}>
      <div className={`bg-light p-5 rounded-lg min-w-[50%]`}>
        {/* Loading */}
        {downloadInfo === 202 ?
          <div className="flex flex-col items-center gap-5">
            <img src={loadingIcon} alt="" height={50} width={50} />
            <p className='font-medium'>Processing your request</p>
          </div>
          : null}
        {/* Error */}
        {downloadInfo === 400 ?
          <div className="flex flex-col items-center gap-5">
            <img src={errorIcon} alt="" height={70} width={70} />
            <p className='font-medium'>Error processing your request</p>
          </div>
          : null}
        {/* Success */}
        {typeof downloadInfo === "object"  ?
          <DownloadInfo downloadInfo={downloadInfo}/>
          : null}
      </div>
    </div>
  )
}

export default Download