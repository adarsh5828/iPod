function MusicMenu({ activeItemInMenu }) {
  return (
    <table id="music-menu">
      <tbody>
        <tr>
          <th className="table-heading">Music <i className="fas fa-music"></i></th>
        </tr>
        <tr data-option="allSongs" className={activeItemInMenu === "allSongs" ? "active" : ""}>
          <td className="table-item">All Songs<i className="fas fa-chevron-right"></i></td>
        </tr>
        <tr data-option="artists" className={activeItemInMenu === "artists" ? "active" : ""}>
          <td className="table-item">Artists<i className="fas fa-chevron-right"></i></td>
        </tr>
        <tr data-option="albums" className={activeItemInMenu === "albums" ? "active" : ""}>
          <td className="table-item">Albums<i className="fas fa-chevron-right"></i></td>
        </tr>
      </tbody>
    </table>
  );
}
export default MusicMenu;