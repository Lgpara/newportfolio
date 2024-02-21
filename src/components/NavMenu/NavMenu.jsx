import "./navMenu.css";

export default function NavMenu() {
  return (
    <div className="navMenuContainer">
      <nav>
        <div className="navElementContainer">
          <div className="backgroundElement"></div>
          <div className="navElement">HOME</div>
        </div>
        <div className="navElementContainer">
          <div className="backgroundElement"></div>
          <div className="navElement">ABOUT ME</div>
        </div>
        <div className="navElementContainer">
          <div className="backgroundElement"></div>
          <div className="navElement">PROJECTS</div>
        </div>
      </nav>
    </div>
  );
}
