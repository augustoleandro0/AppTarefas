import React, { ReactNode, useState } from 'react';

import axios from 'axios';

import Header from '../components/Header';
import Form from '../components/Form';
import TaskList from '../components/TaskList';

const URL = 'http://localhost:3003/api/tasks'

class Tasks extends React.Component {
  constructor(props) {
    super(props);
     this.state = { description: ' ', list: [], placeholder:'adicionar tarefa' }
  
    this.handOnChange = this.handOnChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this)

    this.refresh()
  }

  refresh(){
    axios.get(`${URL}?sort=creatAt`)
     .then(resp =>  this.setState({...this.state, description:' ', list: resp.data}))
  }

  handleAdd(e) {
    e.preventDefault();
    const description = this.state.description
    axios.post(URL,{description})
      .then(resp =>  this.refresh())
      .then(resp => console.log('não e que deu certo'))
  }

  handleRemove( task) {
    axios.delete(`${URL}/${task._id}`)
      
      .then(resp => this.refresh())
  }

  handleMarkAsDone(task){
    axios.put(`${URL}/${task._id}`, {...task, done: true })
      .then(resp => this.refresh())

  }

  handleMarkAsPending(task){
    axios.put(`${URL}/${task._id}`, {...task, done: true })
      .then(resp => this.refresh())
  }

  handOnChange(e) {
    this.setState({ ...this.state, description: e.target.value })
    
  }
 
  render() {
    return (
      <>
      {console.log(this.state.description)}
        <Header name="Tarefas" small="cadastro" />
        <Form description={this.state.description}
          handOnChange={this.handOnChange}
          handleAdd={this.handleAdd} 
          placeholder={this.state.placeholder}/>
          <TaskList list={this.state.list} handleRemove={this.handleRemove} handleMarkAsDone={this.handleMarkAsDone} handleMarkAsPending={this.handleMarkAsPending} />
      </>
    )
  }
}

export default Tasks;
