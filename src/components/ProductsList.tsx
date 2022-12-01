import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import SearchBox from "../common/SearchBox";
import { useGetProductsQuery } from "../store/Api";
import { IProduct } from "../types/IProduct";
import Product from "./Product";

const ProductsList = () => {
  const { data: Products = [], isLoading } = useGetProductsQuery("products");
  const [SearchQuery, setSearchQuery] = useState<string>("");

  const handleChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const FilterProduct = SearchQuery
    ? Products?.filter((product: IProduct) =>
        product.name.toLowerCase().includes(SearchQuery.toLowerCase())
      )
    : Products;
  return (
    <Continer>
      <Sidebar>
        <SearchBox
          value={SearchQuery}
          onChange={handleChangeQuery}
          placeholder="Search Products..."
        />
      </Sidebar>
      <Right>
        {FilterProduct?.map((product: IProduct) => (
          <div>
            <Product product={product} isLoading={isLoading} />
          </div>
        ))}
      </Right>
    </Continer>
  );
};

export default ProductsList;

const Continer = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: 20% 80%;
  grid-template-areas: "sidebar rightmain";

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  grid-area: sidebar;
  display: flex;
  justify-content: center;
`;

const Right = styled.div`
  grid-area: rightmain;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
