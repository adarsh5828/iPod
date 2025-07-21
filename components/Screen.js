import React from 'react';
import './css/screen.css';
import Coverflow from './Coverflow';
import Settings from './Settings';
import Music from './Music';
import Games from './Games';
import SideMenu from './SideMenu';

class Screen extends React.Component{

// Display the sidemenu, coverflow, games,Music etc here
  render(){
const {
      display,
      activeItemInMenu,
      toShowInMusicComponent,
      activeItemInMusic
    } = this.props;
    return (
      <div id="screen">
      {/* Render Side Menu */}
        {display.sideMenu && (
          <SideMenu activeItemInMenu={activeItemInMenu} />
        )}


         {/* Render Coverflow */}
        {display.coverflow && (
          <Coverflow />
        )}


         {/* Render Music Menu and Subcomponents */}
        {display.music && (
          <Music
            display={{
              musicMenu: toShowInMusicComponent === 'musicMenu',
              allSongs: toShowInMusicComponent === 'allSongs',
              artists: toShowInMusicComponent === 'artists',
              albums: toShowInMusicComponent === 'albums',
            }}
            activeItemInMenu={activeItemInMusic}
          />
        )}
           

             {/* Render Games */}
        {display.games && (
          <Games />
        )}


         {/* Render Settings */}
        {display.settings && (
          <Settings />
        )}

      </div>
    );
  }

}

export default Screen;

