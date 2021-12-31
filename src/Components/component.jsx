import React, { useEffect } from 'react';

const Component= ()=> {
    // useEffect(()=> {
    //     console.log("component render");
    //     return (

    //     );
    // }, []);
    
    return (
        <>
            <div className='parent'>
                <div className='child'></div>
                <div className='child'></div>
            </div>
        </>
    );
}