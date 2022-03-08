const Orderby = (props) => {
  return (
    <div className="py-1">
      <input type="checkbox" className="appearance checked:bg-yellow-500" />
      {"  "}
      <label className="text-sm px-1">{props.name}</label>
    </div>
  );
};

export default Orderby;
