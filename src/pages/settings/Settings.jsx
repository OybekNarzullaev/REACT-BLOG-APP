import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdate">Update your account</span>
          <span className="settingsDelete">Delete account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-user-avatar-boy-image_1482937.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Oybek" />
          <label>Email</label>
          <input type="email" placeholder="oybeknarzullaev99@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update Profile</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
