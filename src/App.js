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
                <div className="planet">
                  <Link to="/blogs">Blogs</Link>
                </div>
              </div>
            </div>
            <div id="saturn" className="orbit">
              <div className="pos">
                <div className="planet">
                  <div className="ring"></div>
                  <Link to="/">About</Link>
                </div>
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
            <div id="sun">
              <Link to="/">Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
