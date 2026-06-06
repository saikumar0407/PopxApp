import profileImage from '../assets/profile.jpg';
import cameraIcon from '../assets/camera-icon.svg';
import '../styles/account.css';

function AccountSettings() {
  return (
    <section className="account">
      <article className="account__card">
        <h1 className="account__title">Account Settings</h1>

        <div className="account__profile">
          <div className="account__avatar-wrapper">
            <img
              src={profileImage}
              alt="Marry Doe profile"
              className="account__avatar"
            />
            <button type="button" className="account__camera-btn" aria-label="Edit profile photo">
              <img src={cameraIcon} alt="" className="account__camera-icon" />
            </button>
          </div>

          <div className="account__user-info">
            <h2 className="account__name">Marry Doe</h2>
            <p className="account__email">MarryDoe@gmail.com</p>
          </div>
        </div>

        <hr className="account__divider" />

        <p className="account__bio">
          Lorem ipsum dolor sit amet, consetetur sadip scing elitr. Sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.
        </p>
      </article>
    </section>
  );
}

export default AccountSettings;
