import '../../App.css';

export default function Bio() {
  return (
    <div className="bio-container">
      <div className="card-group">
        <div class="card">
          <h3 class="card-header" id="interests-header">Interests</h3>
          <div class="card-body">
            <h4 class="card-title">App development</h4>
            <p class="card-text">entertainment</p>
            <p class="card-text">music</p>
            <p class="card-text">niche necessities</p>
            <h4 class="card-title">Web design</h4>
            <p class="card-text">food/textiles</p>
            <p class="card-text">e-commerce</p>
            <p class="card-text">renewable energy</p>
          </div>
        </div>
        <div className="card" id="img-card">
          <img className="card-img-top img-fluid" src="/assets/images/avatar.png" alt="Avatar Icon" height="300" />
          <div className="card-body">
            <h4 className="card-title" id="status-title">Status</h4>
            <p className="card-text">
              UMN coding student developer
            </p>
          </div>
        </div>
        <div class="card">
          <h3 class="card-header" id="hobbies-header">Hobbies</h3>
          <div class="card-body">
            <ul class="list-group" id="hobbies-body">
              <li class="list-group-item">Running</li>
              <li class="list-group-item" id="even-hobbies">Coding</li>
              <li class="list-group-item">Gaming</li>
              <li class="list-group-item" id="even-hobbies">Music</li>
              <li class="list-group-item">Anime</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}
