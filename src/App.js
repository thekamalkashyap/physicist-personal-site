import "./App.css";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="#">Projects</Link>
        </li>
        <li>
          <Link to="#">About</Link>
        </li>
      </nav>
    </div>
  );
}

export default App;
