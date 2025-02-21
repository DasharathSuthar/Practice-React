import "./Card.css";

export default function Card({ title, inx }) {
  let font = { fontWeight: "bold" };

  let oldPrice = ["11,900", "4,500"];
  let newPrice = ["8,500", "3,500"];
  let discription = [
    ["Programmable Button", "MultiTasking"],
    ["Expensive", "Featureable"],
  ];
  return (
    <>
      <div className="card">
        <div className="card-info">
          <h1>{title}</h1>
          <p>{discription[inx][0]}</p>
          <p>{discription[inx][1]}</p>
        </div>
        <div className="card-price">
          <span>
            <sup>&#8377;</sup>
            <del>{oldPrice[inx]}</del>
          </span>
          <span style={font}>
            {" "}
            <sup>&#8377;</sup>
            {newPrice[inx]}
          </span>
        </div>
      </div>
    </>
  );
}
