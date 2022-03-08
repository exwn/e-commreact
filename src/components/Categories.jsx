const Categories = (props) => {
  return (
    <div className="flex justify-between gap-52 py-1">
      <h3 className="text-sm">{props.name}</h3>
      <div className="rounded-full w-6 text-center bg-[#F4F8EC] text-[#6A983C] font-bold">
        <h1 className="text-xs">{props.jumlah}</h1>
      </div>
    </div>
  );
};

export default Categories;
