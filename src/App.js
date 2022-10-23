import "./App.css";
import me from "./assets/images/profile_pic.jpg";

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
          <div id="twitter">Twitter - NykzzieT</div>
          <div id="slack">Slack - NafisatF</div>
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
      </div>
    </div>
  );
}

export default App;
