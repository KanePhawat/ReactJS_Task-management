import "./Header.css";

export default function Header({ toggled, onClick }) {
  return (
    <header className={`${toggled ? "night" : "light"}`}>
      <div className="logo">
        <span>Task Management</span>
      </div>
      <div className="theme-container">
        <div
          onClick={onClick}
          className={`toggle${toggled ? " night" : " light"}`}
        >
          <div className="notch">
            <div className="crater" />
            <div className="crater" />
          </div>
          <div>
            <div className="shape-sm" />
            <div className="shape-sm" />
            <div className="shape-md" />
            <div className="shape-lg" />
          </div>
        </div>
      </div>
    </header>
  );
}
