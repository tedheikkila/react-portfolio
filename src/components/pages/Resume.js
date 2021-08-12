
// exports table w/tech proficiencies and link to pdf resume
export default function Resume() {
  return (
    <div>
      <h2 className="tech-table-title">Acquired Tech</h2>
      <table className="table table-borderless" id="table-container">
        <thead className="thead-title">
          <tr>
            <th>Browser</th>
            <th>Server</th>
            <th>Database</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HTML</td>
            <td>Node</td>
            <td>MySQL/Workbench</td>
          </tr>
          <tr>
            <td>CSS/Bootstrap</td>
            <td>Express</td>
            <td>MongoDB/Atlas/Robo 3T</td>
          </tr>
          <tr>
            <td >Javascript/jQuery</td>
            <td>API (REST/GraphQL)</td>
            <td>IndexedDB</td>
          </tr>
          <tr>
            <td >Handlebars</td>
            <td>Sequelize/Mongoose</td>
          </tr>
          <tr>
            <td >React</td>
          </tr>
        </tbody>
      </table>
      <h2 className="resume">
        <a class="resume-link" href="https://drive.google.com/file/d/1YA0iQnUAhv61c9eDHVbo_K7B9ZPgxyfm/view?usp=sharing" target="_blank" rel="noreferrer">pdf Resume</a>
      </h2>
    </div>
  );
}
