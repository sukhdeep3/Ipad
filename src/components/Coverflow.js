import React from 'react';

function Coverflow (){
    return(
        <div className='coverContainer' style={styles.coverContainer} >
            Cover Flow
        </div>
    )
}

export default Coverflow;

    const styles ={
        coverContainer:{
            height: 'inherit',
            width: 'inherit',
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.4rem',
            fontWeight: 'bold'
        }
    }
