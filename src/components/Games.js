import React from 'react';

function Games (){
    return(
        <div>
            <img className='image' style={styles.image} alt="game" src="https://www.collinsdictionary.com/images/full/dice_393025615_1000.jpg" />
        </div>
    )
}

export default Games;

const styles ={
    image:{
        height: '100%',
        width: 150,
        borderRadius: '10px',
        backgroundSize:"20%"
    }
}