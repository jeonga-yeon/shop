import { useQuery } from "@tanstack/react-query";
import ProductItem from "../../components/product/item";
import { fetcher, QueryKeys } from "../../queryClinet";
import { Product } from "../../types";

const ProductList = () => {
  const { data } = useQuery(QueryKeys.PRODUCTS, () =>
    fetcher({
      method: "GET",
      path: "/products",
    })
  );

  return (
    <div>
      <h2>상품 목록</h2>
      <ul className="products">
        {data?.map((product: Product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
