import "./App.css";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="hide-UI view-3D zoom-large">
      <div id="universe" className="scale-stretched">
        <div id="galaxy">
          <div id="solar-system" className="earth">
            <div id="mercury" className="orbit">
              <div className="pos">
                <div className="planet"></div>
              </div>
            </div>
            <div id="venus" className="orbit">
              <div className="pos">
                <div className="planet"></div>
              </div>
            </div>
            <div id="earth" className="orbit">
              <div className="pos">
                <div className="orbit">
                  <div className="pos">
                    <div className="moon"></div>
                  </div>
                </div>
                <div className="planet"></div>
              </div>
            </div>
            <div id="mars" className="orbit">
              <div className="pos">
                <div className="planet"></div>
              </div>
            </div>
            <div id="jupiter" className="orbit">
              <div className="pos">
                <Link to="/blogs" className="planet">
                  <span>Blogs</span>
                </Link>
              </div>
            </div>
            <div id="saturn" className="orbit">
              <div className="pos">
                <Link to="#" className="planet">
                  <div className="ring"></div>
                  <span>About</span>
                </Link>
              </div>
            </div>
            <div id="uranus" className="orbit">
              <div className="pos">
                <div className="planet"></div>
              </div>
            </div>
            <div id="neptune" className="orbit">
              <div className="pos">
                <div className="planet"></div>
              </div>
            </div>
            <Link to="/" id="sun">
              <span>Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
