import { useParams } from "react-router-dom";
import HeaderBtn from "../components/singleProduct/HeaderBtn";
import GetData from "../components/singleProduct/GetData";
import GetImages from "../components/singleProduct/GetImages";
import useSingleProduct from "../services/api/getSingleProduct";

const SingleProductById = () => {
  const { id } = useParams();

  const { product, loading, error } = useSingleProduct({ id });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="px-2">
      <HeaderBtn />

      <div className="container mx-auto gap-4 mt-5 grid sm:grid-cols-2 ">
        <div>
          <GetImages product={product} />
        </div>

        <div>
          <GetData product={product} />
        </div>
      </div>
    </div>
  );
};

export default SingleProductById;
