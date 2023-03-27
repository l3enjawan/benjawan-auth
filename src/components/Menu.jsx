import { Link, useLocation } from "react-router-dom";
export default function Menu() {
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };
  return (
    <div className="boxcontent">
      <div style={{ marginBottom: 10, padding: "30px" }}>
        <center>
          {usePathname() === "/" && <h1>Home</h1>}

          {usePathname() === "/std" && <h1>Student info</h1>}

          {usePathname() === "/stp" && <h1>Student Phone</h1>}

          <Link to="/">
            <button className="btnin">Home</button>
          </Link>
          <Link style={{ margin: 5 }} to="/std">
            <button className="btnin">Student Info</button>
          </Link>
          <Link style={{ margin: 5 }} to="/stp">
            <button className="btnin">Phones</button>
          </Link>
        </center>
      </div>
    </div>
  );
}
