import React from 'react';

 function menu (props){
    // console.log(props.move);
    return(
    <div className='components'>
       
        <div className='left-screen'>
        <h2>iPod.js</h2>

         { props.move==1?
        <div className='cover-icon' style={{backgroundColor: 'skyblue', paddingLeft: '5px', paddingRight: '5px'}}>
        <div>
            Cover Flow
        </div>
        <div className='active'><i class="fa-solid fa-angle-right"></i></div>
        </div>
        :
        <div className='cover-icon'>
        <div>
            Cover Flow
        </div>
        </div>
    }
       

        {props.move==2?
        <div className='music-icon' style={{backgroundColor: 'skyblue', paddingLeft: '5px', paddingRight: '5px'}}>
        <div>
            Music
        </div>
        <div className='active'><i class="fa-solid fa-angle-right"></i></div>
        </div>
        :
        <div className='music-icon'>
        <div>
            Music
        </div>
        </div>
        }

        {props.move==3?
        <div className='games-icon' style={{backgroundColor: 'skyblue', paddingLeft: '5px', paddingRight: '5px'}}>
        <div>
            Games
        </div>
        <div className='active'><i class="fa-solid fa-angle-right"></i></div>
        </div>
        :
        <div className='games-icon'>
        <div>
            Games
        </div>
        </div>
        }

        {props.move==4?
        
        <div className='setting-icon' style={{backgroundColor: 'skyblue', paddingLeft: '5px', paddingRight: '5px'}}>
        <div>
            Settings
        </div>
        <div className='active'><i class="fa-solid fa-angle-right"></i></div>
        </div>
        :
        <div className='setting-icon'>
        <div>
            Settings
        </div>
        </div>
    }

        </div>

        <div className='right-screen'
        ></div>

    </div>
    )
}

export default menu;