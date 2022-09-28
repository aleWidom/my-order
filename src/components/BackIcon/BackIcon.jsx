import { useContext } from "react";
import { SearchContext } from "../../context/search";
import { OrderContext } from "../../context/order";
/* import { TableContext } from "../../context/tables"; */
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

const BackIcon = () => {

/*   const { table } = useContext(TableContext); */

  const { setValueInput } = useContext(SearchContext);

  const { setNameCategorySelected } = useContext(OrderContext);

  const handleBack = () => {
    setValueInput("");
    setNameCategorySelected("");
  };

  //TODO DEBE IR AL HOME PARAMETRIZADO
  return (
    <Link to={`/`} onClick={handleBack}>
      <FaArrowCircleLeft color={"#000"} />
    </Link>
  );
};

export default BackIcon;
