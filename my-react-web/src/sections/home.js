import React, { useState, useEffect } from 'react';

export default function Home() {
    // Initialize state with current date and time
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        // Set an interval to update the date and time every second
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        // Clear the interval when the component is unmounted
        return () => {
            clearInterval(interval);
        };
    }, []);  // Empty dependency array ensures this effect runs once when the component mounts


    return (
        <>
            <div className='home_container'>
                <div className='home_content'>
                    <h1>
                        Welcome to Kim's Page
                    </h1>
                    <div className='kim_img'>
                        <img src="/assets/hihi.GIF" alt='kim-pic' />
                    </div>
                    <div className="clock_api" id="dateapi">
                        {currentDateTime.toLocaleString()}
                    </div>
                </div>



            </div>


        </>
    );
}