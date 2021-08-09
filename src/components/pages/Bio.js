import '../../App.css';

export default function Bio() {
  return (
    <div className="bio-container">
      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
        <div className="card" id="img-card">
          <img className="card-img-top" src="/assets/images/avatar.png" alt="Avatar Icon" height="300" />
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">
              Some quick example text to build on the card title
              and make up the bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
