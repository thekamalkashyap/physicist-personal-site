import "./General.css";
import data from "./data.json";
import { Link } from "react-router-dom";

const blogs = data.map((posts, key) => {
  const id = `/blog/${posts.id}`;
  return (
    <section key={id}>
      <Link to={id}>
        <h3 className="text-center title">{posts.title}</h3>
        <p>
          {posts.text1.trim().split(" ").slice(0, 15).join(" ")} &nbsp; &nbsp;
          <span style={{ color: "yellow" }}>...read more</span>
        </p>
      </Link>
    </section>
  );
});
export default function Blogs() {
  return (
    <div className="root">
      <div className="backhome">
        <button className="backhome-btn">
          <Link to="/">&larr; Back to home</Link>
        </button>
      </div>
      <section className="blogs">{blogs}</section>
    </div>
  );
}
