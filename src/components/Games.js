import React from 'react';

function Games (){
    return(
        <div style={styles.container}>
            <img className='image' style={styles.image} alt="game" src="https://www.collinsdictionary.com/images/full/dice_393025615_1000.jpg" />
        Games
        </div>
    )
}

export default Games;

const styles ={
    container:{
        height: '100%',
        width: '100%',
        borderRadius: '10px',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        height: 100,
        width: 100
    }
}