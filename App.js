import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import TodoForm from "./todoForm";
import TodoList from "./List";

class App extends React.Component {
  constructor(props){
    super();
    this.state={
      items : []
    }
 }

 componentDidMount() {
  axios.get('http://localhost:5000/items')
    .then(res => {
      console.log(res)
      const persons = (res.data);
      
      this.setState({items:persons});
    })
}

  addTodo = (itemStr) => {
    const id = Math.floor(Math.random() * 1000) ;
    const todoObj = { id: id, title: itemStr };
    this.setState({
      items: [...this.state.items, todoObj],
    });


    axios.post('http://localhost:5000/items', todoObj)
    .then(res => {
      console.log(res.data);
    })
    

  }

  deleteTodo = (id) => {
    const updatedItems = [...this.state.items].filter((item) => item.id !== id);
    this.setState({ items: updatedItems });
    axios.delete(`http://localhost:5000/items/${id}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  };

  render() {
   
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
            My Todo App
          </a>
        </nav>
        <TodoForm addTodo={this.addTodo} />
        <TodoList tasks={this.state.items} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;