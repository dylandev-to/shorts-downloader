import React from 'react';

function NavBar() {
    return (
        <div className="flex px-10 items-center w-full h-20 justify-between">
            <h1 className="text-primary text-center text-xl font-bold">Shorts <span className='text-background bg-secondary p-2 rounded-lg'>Downloader</span></h1>
            <div className="flex gap-5 font-medium">
                <p>Home</p>
                <p>Terms of Service</p>
                <p>Contact</p>
            </div>
        </div>
    );
}

export default NavBar;
