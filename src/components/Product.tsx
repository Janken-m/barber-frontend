import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IProduct } from "../types/IProduct";
import { Card } from "antd";
import { ShoppingCartOutlined, MoreOutlined } from "@ant-design/icons";

const { Meta } = Card;

interface Props {
  product: IProduct;
  isLoading: boolean;
}

const Product = ({ product, isLoading }: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <Continer>
        <Card
          style={{ width: 250, height: 330, display: "" }}
          cover={<img alt="product_image" src={product.img} />}
          loading={isLoading ? true : false}
          size={"small"}
          actions={[
            <ShoppingCartOutlined
              key="edit"
              style={{
                borderRadius: "3rem",
                color: "var(--button)",
              }}
            />,
            <MoreOutlined
              key="setting"
              onClick={() => navigate(`/products/${product._id}`)}
            />,
          ]}
        >
          <Meta title={product.name} description={product.desc} />
        </Card>
      </Continer>
    </>
  );
};

export default Product;

const Continer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;

  img {
    place-self: center;
    width: 12rem;
    height: auto;
    object-fit: cover;
    border-radius: 1rem;
  }

  button {
    background-color: red;
    cursor: pointer;
    color: white;
    border: none;
    place-self: center;
    padding: 5px;
    font-size: 14px;
    margin-left: 20px;
    border-radius: 10px;
  }
`;
