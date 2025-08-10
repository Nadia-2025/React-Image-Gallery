import cards from "../data/cardsData";

function Gallery() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card-group">
            {cards.map(({ imgSrc, title, text, date }, index) => (
              <div className="card" key={index}>
                <img
                  src={imgSrc}
                  className="card-img-top card-js"
                  alt="nature"
                />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{text}</p>
                  <p className="card-text">
                    <small className="text-muted">{date}</small>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
