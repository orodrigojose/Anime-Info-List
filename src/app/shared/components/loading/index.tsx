import { FaSpinner } from "react-icons/fa";
import "./styles.css";

const Loading = () => {
  return (
    <section className="loading-container">
      <FaSpinner className="loading-icon"/>
      <p>Loading...</p>
    </section>
  );
};

export default Loading;