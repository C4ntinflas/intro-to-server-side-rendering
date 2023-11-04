const React = require('react');
const Default = require('./layouts/Default');

function Index({ breads, title }) {
  return (
    <Default title={title}>
      <h2>Index Page</h2>
      <ul>
        {breads.map((bread, index) => {
          return (
            <li key={index}>
              <a href={`/breads/${bread.id}`}>
                {bread.name}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="newButton">
  <a href="/breads/New"><button>Add a new bread</button></a>
</div>
<div className="backButton">
  <a href="/breads"><button>Go back to the index</button></a>
</div>
    </Default>
  );
}

module.exports = Index;
