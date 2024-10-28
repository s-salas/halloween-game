import React from "react";

function Category({ name, questions }) {
    return (
      <div className="col-sm text-center">
        <div className="card">
          <div className="card-header">
            <h2>{name}</h2>
          </div>
          <ul className="list-group list-group-flush">
            {questions.map((question, index) => (
              <li className="list-group-item" key={index}>
                <a href="#" data-toggle="modal" data-target="#questionModal">
                  {(index + 1) * 100}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  export default Category;