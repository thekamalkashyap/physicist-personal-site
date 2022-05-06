import "./App.css";
import { Link } from "react-router-dom";
export default function Blogs() {
  return (
    <div className="App flex-col">
            <Link to='/'>back to home</Link>
            <section className="blogpost">
            <Link to='/blog1'>
              <h2> maths and physics</h2>
              <article>
              Math and physics are two sides of same coin, the coin of nature (nature here
              refers to whole universe).
              Physics is the study of phenomenon that occurs in nature whereas mathematics is
              study of patterns found in nature.
              </article>
              </Link>
            </section>
    </div>
  );
}
