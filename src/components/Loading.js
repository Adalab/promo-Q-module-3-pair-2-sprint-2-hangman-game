import "../styles/Loading.scss";
import propTypes from "prop-types";

function Loading({ loading }) {
  if (loading) {
    return <span className="loading" />;
  } else {
    return null;
  }
}

Loading.defaultProps = {
  loading: true,
};

Loading.propTypes = {
  loading: propTypes.bool.isRequired,
};
export default Loading;
