import "./App.css";
import me from "./assets/images/profile_pic.jpg";
import slack from "./assets/images/slack.png";
import github from "./assets/images/github.png";
import zuri from "./assets/images/zuri.jpeg";
import i4g from "./assets/images/i4g.jpeg";

function App() {
  return (
    <div className="App">
      <div className="profile_container">
        <div className="profile_section">
          <img
            id="profile__img"
            src={me}
            className="profile_pic"
            alt="profile"
          />
          <h3 id="full_name">Nafisat Faruk</h3>
        </div>
        <div className="link_section">
          <div id="twitter">
            <a
              href="https://twitter.com/NykzzieT"
              rel="noreferrer"
              target="_blank"
            >
              Twitter - NykzzieT
            </a>
          </div>
          <div id="slack" style={{ display: "none" }}>
            Slack - Nafisat Faruk
          </div>
          <div id="btn__zuri">
            <a
              href="https://training.zuri.team"
              rel="noreferrer"
              target="_blank"
            >
              Zuri Team
            </a>
          </div>
          <div id="books">
            <a href="https://books.zuri.team" rel="noreferrer" target="_blank">
              Zuri Books
            </a>
          </div>
          <div id="book__python">
            <a
              href="https://books.zuri.team/python-for-beginners?ref_id=NafisatF"
              rel="noreferrer"
              target="_blank"
            >
              Python Books
            </a>
          </div>
          <div id="pitch">
            <a
              href="https://background.zuri.team"
              rel="noreferrer"
              target="_blank"
            >
              Background Check for Coders
            </a>
          </div>
          <div id="book__design">
            <a
              href="https://books.zuri.team/design-rules"
              rel="noreferrer"
              target="_blank"
            >
              Design Books
            </a>
          </div>
        </div>

        <div className="personal_links">
          <a
            href="https://twitter.com/NykzzieT"
            rel="noreferrer"
            target="_blank"
          >
            <img
              alt="icon-logo"
              src={slack}
              style={{ width: 20, height: 20 }}
            />
          </a>
          <a href="https://github.com/phyya" rel="noreferrer" target="_blank">
            <img
              alt="icon-logo"
              src={github}
              style={{ width: 20, height: 20 }}
            />
          </a>
        </div>
      </div>
      <div className="footer">
        <img alt="icon-logo" src={zuri} />
        <p>HNGInternship 9 Frontend task</p>
        <img alt="icon-logo" src={i4g} />
      </div>
    </div>
  );
}

export default App;
