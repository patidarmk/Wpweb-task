const Categories = ({ data }) => {
  return (
    <div className="">
      <table>
        <tr className="header">
          <td>Id</td>
          <td>Categories</td>
        </tr>
        {data &&
          data.map((dataObj, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{dataObj}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default Categories;