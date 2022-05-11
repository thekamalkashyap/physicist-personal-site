import data from "./data.json";
import { Link, useParams } from "react-router-dom";

export default function Blog() {
  const { id } = useParams();
  const blog = data.filter((posts) => posts.id === `${id}`);
  return (
    <div className="App flex-col">
      <div className="backhome">
        <button className="backhome-btn">
          <Link className="text-center" to="/">
            &larr; Back to home
          </Link>
        </button>
      </div>
      <section className="blog" style={{fontSize:"3vh"}}>
        <h2 style={{ textAlign: "center" }}>{blog[0].title}</h2>
        <article>
          <p>{blog[0].text1}</p>
          <p>{blog[0].text2}</p>
          <p>{blog[0].text3}</p>
          <p>{blog[0].text4}</p>
        </article>
      </section>
    </div>
  );
}
