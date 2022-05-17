import React, { ReactNode, useState } from 'react';

import axios from 'axios';

import Header from '../components/Header';
import Form from '../components/Form';
import TaskList from '../components/TaskList';

const URL = 'http://localhost:3003/api/tasks'

class Tasks extends React.Component {
  constructor() {
    super(props);
     this.state = { description: ' ', list: [], placeholder:'adicionar tarefa' }
  
    this.handOnChange = this.handOnChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleClear = this.handleClear.bind(this)

    this.handleRemove = this.handleRemove.bind(this)
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this)

    this.refresh()
  }

  refresh(description = '') {
    const search = description ? `&description__regex=/${description}/` : ''
    axios.get(`${URL}?sort=-createdAt${search}`)
        .then(resp => this.setState({...this.state, description, list: resp.data}))
}

handleSearch(e) {
    e.preventDefault()
    this.refresh(this.state.description)
}

  handleAdd(e) {
    e.preventDefault()
    const description = this.state.description
    axios.post(URL,{description})
      .then(resp =>  this.refresh())
  }

  handleRemove(task) {
    axios.delete(`${URL}/${task._id}`)
      .then(resp => this.refresh(this.state.description))
  }

  handleMarkAsDone(task){
    axios.put(`${URL}/${task._id}`, {...task, done: true })
      .then(resp => this.refresh(this.state.description))
  }

  handleMarkAsPending(task){
    axios.put(`${URL}/${task._id}`, {...task, done: false })
    .then(resp => this.refresh(this.state.description ))
  }

  handOnChange(e) {
    this.setState({ ...this.state, description: e.target.value })
    
  }

  handleClear() {
    this.refresh()
    
  }


  render() {
    return (
      <>
        <Header name="Tarefas" small="cadastro" />
        <Form description={this.state.description}
          handOnChange={this.handOnChange}
          handleAdd={this.handleAdd} 
          handleSearch={this.handleSearch}
          placeholder={this.state.placeholder}/>

          <TaskList list={this.state.list} 
          handleRemove={this.handleRemove} 
          handleMarkAsDone={this.handleMarkAsDone} 
          handleMarkAsPending={this.handleMarkAsPending} />
      </>
    )
  }
}

export default Tasks;
