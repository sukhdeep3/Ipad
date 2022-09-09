import React from 'react';


function songs (){
    console.log("Hello");
    return(
        <div style={styles.fullContainer} >
            <div style={styles.upperContainer}>
                <div className='img-container'>
                    <img alt="image" style={styles.img} src="https://yt3.ggpht.com/ytc/AMLnZu_GKuSXA45anTWga4TDB53lLC7fCQgzD2jtorItUw=s900-c-k-c0x00ffffff-no-rj" />
                </div>
                <div className='songDetails'>
                    <div>The Last Ride</div>
                    <div>Sidhu Moose Wala</div>
                </div>
            </div>
            <div style={styles.lowerContainer}>
                <div style={styles.playBar}>
                    <div style={styles.innerPlayBar}></div>
                </div>
                <div style={styles.timing}>
                    <div style={{fontSize:'0.8rem'}}>0:55</div>
                    <div style={{fontSize:'0.8rem'}}>3:42</div>
                </div>
            </div>
        </div>
    )
}

export default songs;

const styles={
    fullContainer:{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    upperContainer:{
        height: '100%',
        width:'100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lowerContainer:{
        height: '40%',
        width:'100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img:{
        height: 50,
        width: 50,
        marginRight: 9
    },
    playBar:{
        height: 2,
        width: '80%',
        backgroundColor: 'lightgray'
    },
    innerPlayBar:{
        height:'inherit',
        width: '4%',
        backgroundColor: 'grey'
    },
    timing:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    }
}