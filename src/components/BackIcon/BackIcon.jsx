import { useContext } from "react";
import { TableContext } from "../../context/tables";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

const BackIcon = () => {
  const { table } = useContext(TableContext);

  //TODO DEBE IR AL HOME PARAMETRIZADO
  return (
    <Link to={`/`}>
      <FaArrowCircleLeft color={"#000"} />
    </Link>
  );
};

export default BackIcon;
