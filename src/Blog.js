import data from "./data.json";
import { Link, useParams } from "react-router-dom";

export default function Blog() {
  const { id } = useParams();
  const blog = data.filter((posts) => posts.id === `${id}`);
  return (
    <div>
      <div className="backhome">
        <button className="backhome-btn">
          <Link className="text-center" to="/">
            &larr; Back to home
          </Link>
        </button>
      </div>
      <section className="blog">
        <h2 className="text-center title">{blog[0].title}</h2>
        <article>
          <p>{blog[0].text1}</p>
          <br />
          <p>{blog[0].text2}</p>
          <br />
          <p>{blog[0].text3}</p>
          <br />
          <p>{blog[0].text4}</p>
        </article>
      </section>
    </div>
  );
}
