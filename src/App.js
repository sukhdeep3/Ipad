import "./styles.css";
import React from 'react';
import Ipod from './Ipod';
import ZingTouch from 'zingtouch';
// import Menu from './components/menu';

 class App extends React.Component {
  constructor(){
    super();
    this.state={
      move: -1,
      menu:true,
      cover: false,
      music:false,
      games:false,
      settings: false,
      songs: false,
      artist: false,
      album: false
    }
  }

  handleRotation=(e)=>{
    const content=this;
    var distance=0;
    var region=new ZingTouch.Region(e.target)
    region.bind(e.target,'rotate',function(e){
        distance=e.detail.distanceFromOrigin;
        if (distance>=0 && distance<=45) {
          content.setState({
            move:1
          })
          //  console.log(content.state.move);
        }
        if(distance>40 && distance<=90){
          content.setState({
            move:2
          })
          // console.log(content.state.move)
        }
        if (distance>80 && distance<=135) {
          content.setState({
            move:3
          })
          // console.log(content.state.move);
        }
        if(distance>120 && distance<=180){
          content.setState({
            move:4
          })
          // console.log(content.state.move)
        } 

        if(distance>180 && distance<=225){
          content.setState({
            move:1
          })
          // console.log(content.state.move)
        } 
        if(distance>225 && distance<=270){
          content.setState({
            move:2
          })
          // console.log(content.state.move)
        } 

        if(distance>270 && distance<=315){
          content.setState({
            move:3
          })
          // console.log(content.state.move)
        } 
        if(distance>315 && distance<=360){
          content.setState({
            move:4
          })
          // console.log(content.state.move)
        } 

    })
}

      onEnter=()=>{
        if(this.state.menu){
        if(this.state.move==1){
          this.setState({
            menu:false,
            cover:true,
            music:false,
            games:false,
            settings: false
          })
        }
        if(this.state.move==2){
          this.setState({
            menu:false,
            cover:false,
            music:true,
            games:false,
            settings: false
          })
        }
        if(this.state.move==3){
          this.setState({
            menu:false,
            cover:false,
            music:false,
            games:true,
            settings: false
          })
        }
        if(this.state.move==4){
          this.setState({
            menu:false,
            cover:false,
            music:false,
            games:false,
            settings:true
          })
        }
      }
      else if(this.state.music){
        if(this.state.move==1){
          this.setState({
            menu:false,
            songs: true,
            artist: false,
            album: false
          })
      }
      if(this.state.move==2){
        this.setState({
          menu:false,
          songs: false,
          artist: true,
          album: false
        })
    }
    if(this.state.move==3){
      this.setState({
        menu:false,
        songs: false,
        artist: false,
        album: true
      })
  }
      }
    }

      handleMenuClick=()=>{
        if(this.state.songs)
        this.setState({
          menu: false,
          cover: false,
          music:true,
          games:false,
          settings: false,
          songs: false
        })
        else {
          this.setState({
            menu: true,
            cover: false,
            music:false,
            games:false,
            settings: false,
            songs: false
          })
        }
      }
    

  render(){
    // console.log(this.state.move);
  return (
    <div className="App">
      <Ipod 
      rotate={this.handleRotation}
      handleMenu={this.handleMenuClick}
      move={this.state.move}
      enter={this.onEnter}
      menu={this.state.menu}
      cover={this.state.cover}
      music={this.state.music}
      games={this.state.games}
      settings={this.state.settings}
      songs={this.state.songs}
      artist={this.state.artist}
      album={this.state.album}/>
    </div>
  );
  }
 }
export default App;