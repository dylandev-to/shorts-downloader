import React from 'react'
import test from "./../../../assets/test.jpeg"

function DownloadInfo({ downloadInfo }) {
    return (
        <div className="flex items-center gap-5">
            <img src={test} alt="" height={100} width={100}
                className='h-' />
        </div>
    )
}

export default DownloadInfo