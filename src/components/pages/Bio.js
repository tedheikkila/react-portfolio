import '../../App.css';

// exports 3 bio-related cards
export default function Bio() {
  return (
    <div className="bio-container">
      <div className="card-group">
        <div className="card">
          <h3 className="card-header" id="interests-header">Interests</h3>
          <div className="card-body">
            <h4 className="card-title">App development</h4>
            <p className="card-text">entertainment</p>
            <p className="card-text">music</p>
            <p className="card-text">niche necessities</p>
            <h4 className="card-title">Web design</h4>
            <p className="card-text">food/textiles</p>
            <p className="card-text">e-commerce</p>
            <p className="card-text">renewable energy</p>
          </div>
        </div>
        <div className="card" id="img-card">
          <img className="card-img-top img-fluid" src="/assets/images/avatar.PNG" alt="Avatar Icon" height="300" />
          <div className="card-body">
            <h4 className="card-title" id="status-title">Status</h4>
            <p className="card-text">
              UMN coding student developer
            </p>
          </div>
        </div>
        <div className="card">
          <h3 className="card-header" id="hobbies-header">Hobbies</h3>
          <div className="card-body">
            <ul className="list-group" id="hobbies-body">
              <li className="list-group-item">Running</li>
              <li className="list-group-item" id="even-hobbies">Coding</li>
              <li className="list-group-item">Gaming</li>
              <li className="list-group-item" id="even-hobbies">Music</li>
              <li className="list-group-item">Anime</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
