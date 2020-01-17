import React from 'react'
//components
import Event from './Event'
import Task from './Task'
import TaskForm from './TaskForm'
//redux
import { connect } from 'react-redux'
import { addTask } from '../redux/actions'
import { deleteTask } from '../redux/actions'
import { updateTask } from '../redux/actions'
//styling
import styled from 'styled-components';

class DayComponent extends React.Component {
    state={
        hideTaskForm: true,
        description: '',
        updateTask: false,
        chosenTask: {}
    }

    renderEvents = () => {
        let eventForDay = this.props.events.filter(event => event.date === this.props.dayOfMonth)
        let theEvent = eventForDay[0]
        if (theEvent) {
            return (<div><Event event={theEvent} /></div>)
        }
    }

    renderTheTasks = () => {
        const TaskInfo = styled.li`
            
        `;

        let allTheTasksForEachDay = []
        let tasksForDay = this.props.tasks.filter(task => task.date === this.props.dayOfMonth)
        tasksForDay.map((task) => {
            allTheTasksForEachDay.push(<TaskInfo><Task chosenTask={this.state.chosenTask} updateTaskState={this.state.updateTask} updateTaskFunc={this.updateTaskFunc} key={task.id} task={task} deleteTask={this.deleteTask} handleDescriptionChange={this.handleDescriptionChange} handleUpdateTaskSubmit={this.handleUpdateTaskSubmit} description={this.state.description} /></TaskInfo>)
        })
        return allTheTasksForEachDay
    }

    handleClick = () => {
       this.setState({
           hideTaskForm: false
       })
    }

    updateTaskFunc = (evt, taskToUpdate) => {
        this.setState({
            updateTask: true,
            chosenTask: taskToUpdate
        })
    }

    handleUpdateTaskSubmit = (evt) => {
        evt.preventDefault()
        fetch(`http://localhost:3000/tasks/${this.state.chosenTask.id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                'accepts': 'application/json'
            },
            body: JSON.stringify({
                description: this.state.description
            })
        })
        .then(r => r.json())
        .then((updatedTask) => {
            this.props.updateTask(updatedTask)
            this.setState({
                hideTaskForm: true,
                updateTask: false
            })
        })
    }

    handleNewTaskSubmit = (evt) => {
        evt.preventDefault()
        fetch("http://localhost:3000/tasks", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'accepts': 'application/json'
            },
            body: JSON.stringify({
                description: this.state.description,
                date: this.props.dayOfMonth,
                completed: false,
                page_id: this.props.page.id
            })
        })
        .then(r => r.json())
        .then((newTask) => {
           this.props.addTask(newTask)
           this.setState({
               hideTaskForm: true
           }) 
        })
    }

    deleteTask = (evt, taskToDelete) => {
        console.log(taskToDelete)
        fetch(`http://localhost:3000/tasks/${taskToDelete}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then((deleteData) => {
            this.props.deleteTask(taskToDelete)
        })
    }

    handleDescriptionChange = (evt) => {
        this.setState({
            description: evt.target.value
        })
    }

    renderTheDay = () => {
        const AddButton = styled.button`
            color: white;
            font-size: 0.8em;
            border: 2px solid palevioletred;
            border-radius: 3px;
            background-color: palevioletred;
            margin-top: 10%;
        `;

        if (this.state.hideTaskForm) {
            return(<>
            {this.props.name} {this.props.dayOfMonth}
                <div>
                    {this.renderEvents()}
                </div>
                <div>
                    <ul>
                        {this.renderTheTasks()}
                    </ul>
                    <div>
                        <AddButton onClick={() => this.handleClick()}>
                            add task
                        </AddButton>
                    </div>
                </div>
            </>)
        } else {
            return(<>
            {this.props.name} {this.props.dayOfMonth}
            <div>
                    {this.renderEvents()}
                </div>
                <div>
                    {this.renderTheTasks()}
                </div>
                <div><TaskForm handleDescriptionChange={this.handleDescriptionChange} handleUpdateTaskSubmit={this.handleUpdateTaskSubmit} handleNewTaskSubmit={this.handleNewTaskSubmit} description={this.state.description} updateTask={this.state.updateTask} task={this.state.taskToUpdate}/></div> 
            </>)
        }
    }

    render() {
        const AddButton = styled.button`
            color: white;
            font-size: 0.8em;
            border: 2px solid palevioletred;
            border-radius: 3px;
            background-color: palevioletred;
            margin-top: 10%;
        `;

        const AddButtonArea = styled.div`
            
        `;

        return(<div>
            {this.renderTheDay()}
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        page: state.page
    }
}

export default connect(mapStateToProps, { addTask, deleteTask, updateTask })(DayComponent)