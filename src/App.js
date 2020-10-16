import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todos: [
        {
          id: 1,
          content: "working",
          status: true
        },
        {
          id: 2,
          content: "travel with girl friend",
          status: true
        },
        {
          id: 3,
          content: "meet grandmother",
          status: true
        },
     
      ]
    }
  }
  render(){
    let elements = this.state.todos.map((work, index) => {
      let result = '';
      result = work.content
      return result;
    });
    return (
      <div className="App">
        <div class="all">
          <div class="content-list">
              <h3>Danh sách những việc cần làm </h3>
              <input id="txt-content" type="text" placeholder="......"></input>
              <button id="btn-add">Them</button>
          </div>
          <div class="todo-list" id="todo-list">
              <ul>  
                <li>
                  {elements}
                </li>
              </ul>
          </div>
        </div> 
      </div> 
    );
  }
}

export default App;
