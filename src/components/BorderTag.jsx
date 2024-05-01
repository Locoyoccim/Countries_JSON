import { Link } from "react-router-dom";
import "/src/styles/borderTag.css";
function BorderTag({ nombre }) {
  return (
    <>
      <Link to={`/flag/${nombre}`} className="tag_name link_tag">
        {nombre}
      </Link>
    </>
  );
}

export default BorderTag;
