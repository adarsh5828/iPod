import React, { useEffect } from 'react';


function SideMenu({activeItemInMenu}) {
// write logic for changing the selected item in the side menu
// I Have done it by changing the ClassNames below

  return (
    <table id="side-menu">
        <tbody>
        <tr>
            <th className="table-heading">iPod <i className="fas fa-home"></i></th>
        </tr>
        <tr data-option="coverflow"
        className={activeItemInMenu === 'coverflow' ? 'active' : ''} >
            <td className="table-item">Coverflow<i className="fas fa-chevron-right"></i></td> 
        </tr>
        <tr data-option="music"
        className={activeItemInMenu === 'music' ? 'active' : ''}>
            <td className="table-item">Music<i className="fas fa-chevron-right"></i></td>
        </tr>
        <tr data-option="games"
        className={activeItemInMenu === 'games' ? 'active' : ''}>
            <td className="table-item">Games<i className="fas fa-chevron-right"></i></td>
        </tr>
        <tr data-option="settings"
        className={activeItemInMenu === 'settings' ? 'active' : ''}>
            <td className="table-item">Settings<i className="fas fa-chevron-right"></i></td>
        </tr>
        </tbody>
    </table>
  );
}

export default SideMenu;
