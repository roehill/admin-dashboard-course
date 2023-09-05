import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <span>oneweb admin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>2</span>
        </div>
        <div className="user">
          <img src="/avatar.jpg" alt="" />
          <span>Sławomir</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
}

export default Navbar;
