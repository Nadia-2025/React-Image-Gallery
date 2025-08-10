function Displayer({ imgSrc }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="displayer d-flex justify-content-center align-items-center mb-2">
            {imgSrc ? (
              <img
                src={imgSrc}
                className="card-img-top card-js"
                alt="Selected"
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Displayer;
