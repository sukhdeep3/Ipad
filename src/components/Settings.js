import React from 'react';

function Settings (){
    return(
        <div style={styles.setContainer}>
           <img alt="settings" style={styles.setImg} src="https://i.pinimg.com/736x/45/b5/23/45b523c5c3c7177394356ca01efd494d.jpg" />
           Settings
        </div>
    )
}

export default Settings;

const styles ={
    setContainer:{
        height: '100%',
        width: '100%',
        borderRadius: '10px',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    setImg:{
        height: 100,
        width: 100
    }
}