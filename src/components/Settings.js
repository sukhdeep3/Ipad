import React from 'react';

function Settings (){
    return(
        <div className='settingContainer' style={styles.setContainer}>
           <img alt="settings" style={styles.setContainer} src="https://i.pinimg.com/736x/45/b5/23/45b523c5c3c7177394356ca01efd494d.jpg" />
        </div>
    )
}

export default Settings;

const styles ={
    setContainer:{
        height: '100%',
        width: '100%',
        borderRadius: '10px'
    }
}