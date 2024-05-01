import { Link } from "react-router-dom";
import "/src/styles/Error.css";

function Error() {
  return (
    <>
      <div className="error_container">
        <div className="content">
          <i class="bi bi-cone-striped cone"></i>
          <div className="error_msj">Sitio en construccion</div>
          <Link to={"/"} className="home_button">
            <i class="bi bi-house-door-fill home"></i>Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default Error;
