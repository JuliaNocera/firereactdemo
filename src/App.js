import React, { Component } from 'react';
import fetch from 'isomorphic-fetch'
import './App.css';
import * as firebase from 'firebase'

class App extends Component {

  constructor() {
    super()
    
    this.handleChange = this.handleChange.bind(this)    
    this.handleSubmit = this.handleSubmit.bind(this)    

    this.state = {
      name: 'hello',
      email: 'nocera.julia@gmail.com',
      input: '',
      todos: {}
    }
  }

  componentDidMount() {
    let database = firebase.database()
    const name = database.ref('name')
    this.listenToTodos()
    name.on('value', snap => {
      this.setState({
        name: snap.val()
      })
    }, (err) => {
      console.log(err)
    })
  }

/****** Firebase Cloud Functions *****/
 getData() {
    fetch("http://localhost:5002/firereactdemo/us-central1/getData")
    .then((response) => {
      if(response.status === 200) {
        return response.text()
      }
    }) 
    .then((todos) => {
      console.log('response: ', todos)
    })
  } 

  helloWorld() {
    fetch("http://localhost:5002/firereactdemo/us-central1/helloWorld")
    .then((response) => {
      if(response.status < 400) {
        return response.text()
      }
    }) 
    .then((text) => {
      console.log('response: ', text)
    })
  }

/*********************************************************************************/


/************* todo handlers*************/
  listenToTodos() {
    let database = firebase.database()
    const todosRef = database.ref('todos')
    todosRef.on('value', todos => {
      this.setState({todos: todos.val()})
    })
  }

  addTodo(newTodo) {
    const database = firebase.database()
    const todosRef = database.ref('todos')
    let todo = {
      title: newTodo,
      complete: false
    }
    const key = todosRef.push().key
    database.ref(`todos/${key}`).set(todo)
    .then(() => {
      this.setState({input: ''})
    })
    .catch((err) => {
      console.log('error from set todo: ', err)
    })
  }

  todoChecked(checked, key) {
    const { todos } = this.state
    const database = firebase.database()
    const todoRef = database.ref(`todos/${key}`)
    let todo = todos[key]
    todo.complete = !todo.complete
    todoRef.update(todo)
  }

/*********************************************************************************/

/******* Updates and Submit ******/
  handleChange(e) {
    this.setState({input: e.target.value})
  }

  handleSubmit(e) {
    this.addTodo(this.state.input)
    e.preventDefault()
  }

  checked(e, todo) {
    this.todoChecked(e, todo)
  }

  render() {
    const { todos, name, email, input } = this.state

    return (
      <div className="App">
        <h1>{`Hello ${name} `}</h1>
        <h3>{email}</h3>
        <hr/>
        <h1 style={{marginBottom: '2%', marginTop: '3%'}}>
          TODOS
        </h1>
        { 
          Object.keys(todos || {}).map((todo) => (
            <div style={{marginBottom: '1%'}} key={todo}>
              <label>{`${todos[todo].title} `}</label>
              <input type="checkbox" checked={todos[todo].complete} value={todos[todo].title} onChange={(e) => this.checked(e, todo)}/>
            </div>
          ))
        }
        <form onSubmit={this.handleSubmit}>
        <input type='text' value={input} onChange={this.handleChange} />
        <button onSubmit={this.handleSubmit}>Submit</button> 
      </form>
      <button style={{margin: '15px'}} onClick={() => this.helloWorld()}>Hello World</button>
      <button style={{margin: '15px'}} onClick={() => this.getData()}>Get Data</button>
      </div>
    );
  }
}

export default App;
