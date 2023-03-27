import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div class="boxcontent">
      <h2>Page Not Found</h2>
      <div>There is no such a page.</div>
      <hr />
      <Link style={{ margin: 5 }} to="/">
        <button className="btnout">Home</button>
      </Link>
      <br />
    </div>
  );
};
export default PageNotFound;
