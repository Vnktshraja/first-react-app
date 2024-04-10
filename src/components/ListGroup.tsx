function ListGroup() {
  let items = ["singapore", "thailand", "malaysia", "dubai"];
  items = [];
  // const message = () => {
  //   return items.length === 0 ? <p>"No item found"</p> : null;
  // };
  return (
    <>
      <h1>List</h1>
      {/* {message()} */}
      {items.length === 0 && <p>"No item found"</p>}
      <ul className="list-group">
        {items.map((index) => (
          <li key={index}>{index}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
