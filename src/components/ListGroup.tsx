import { useState } from "react";

function ListGroup() {
  let items = ["singapore", "thailand", "malaysia", "dubai"];
  // items = [];
  // const message = () => {
  //   return items.length === 0 ? <p>"No item found"</p> : null;
  // };

  const [selectedItem, setSelectedItem] = useState(-1);
  return (
    <>
      <h1>List</h1>
      {/* {message()} */}
      {items.length === 0 && <p>"No item found"</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedItem(index), console.log(item, index);
            }}
          >
            {" "}
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
