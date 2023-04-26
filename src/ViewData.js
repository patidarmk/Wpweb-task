import "./ViewData.css";
const ViewData = ({ id, data, isViewActive, closeView }) => {
  console.log(id);
  const product = data.filter((item) => item.id === id);

  console.log(product);
  return (
    <div>
      {isViewActive === 1 && (
        <div className="card">
          <button onClick={closeView} className="button">
            Close
          </button>
          <h3>{product[0].title}</h3>
          <img className="card-image" src={product[0].image} alt="cover" />
          <div>{product[0].category}</div>
        </div>
      )}
    </div>
  );
};

export default ViewData;