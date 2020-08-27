import React from "react";

class TodoList extends React.Component {
  render = () => {
    return (
      <ul className="list-group">
        {this.props.tasks.map((item) => {
          return (
            <li className="list-group-item" key={item.id}>
              <span>
                <span>{item.title}</span>
                <span
                  className="float-right"
                  onClick={this.props.deleteTodo.bind(this, item.id)}
                >
                  Delete
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    );
  };
}

export default TodoList;