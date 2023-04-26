const Products = ({
  data,
  searchByName,
  searchByCategories,
  showDetails,
  currentPage,
}) => {
  let filteredData = data;
  filteredData = data.filter((item) => item.id >= 5 * (currentPage - 1) + 1);
  if (searchByName) {
    filteredData = filteredData.filter(
      (item) =>
        item.title.toLowerCase().indexOf(searchByName.toLowerCase()) > -1
    );
  }
  if (searchByCategories) {
    filteredData = filteredData.filter((item) =>
      item.category.toLowerCase().includes(searchByCategories.toLowerCase())
    );
  }

  return (
    <div className="">
      <table>
        <tr className="header">
          <td>Id</td>
          <td>Title</td>
          <td>Image</td>
          <td>Categories</td>
          <td>Action</td>
        </tr>
        {filteredData.length >= 1 &&
          filteredData.map((dataObj, index) => {
            return (
              <tr key={dataObj.id}>
                <td>{dataObj.id}</td>
                <td>{dataObj.title}</td>
                <td className="image">
                  <img className="card-image" src={dataObj.image} alt="cover" />
                </td>
                <td>{dataObj.category}</td>
                <td className="operation">
                  <button
                    onClick={() => showDetails(dataObj.id)}
                    value={dataObj.id}
                    className="button"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default Products;