interface IUrl {
  url: string;
}

const Card = ({ url }: IUrl) => {
  return (
    <div>
      <img src={url} width="100px" height="100px" alt="" />
    </div>
  );
};

export default Card;
