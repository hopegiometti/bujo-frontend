import React from 'react'
//styling
import styled from 'styled-components';
//components
import TaskForm from './TaskForm'

class Task extends React.Component {
    renderTaskOrForm = () => {
        const DeleteButton = styled.button`
            color: palevioletred;
            font-size: 0.5em;
            border: 2px solid palevioletred;
            border-radius: 25%;
            text-align: center;
            color: white;
            background-color: palevioletred;
            margin-left: 5%;
        `;

        const Input = styled.input`
            padding: 0.5em;
            margin: 0.5em;
            color: palevioletred;
            background: white;
            border: none;
            border-radius: 3px;
        `;

        if (this.props.updateTaskState && this.props.chosenTask.id === this.props.task.id) {
            return(<>
            <div>
                <form onSubmit={(evt) => this.props.handleUpdateTaskSubmit(evt)}>
                    <Input
                    onChange={this.props.handleDescriptionChange}
                        type="text"
                        name="description"
                        value={this.props.description}
                        placeholder={this.props.task.description}
                    />
                    <Input type="submit" value="add"/>
                </form>
            </div>
            </>)
        } else {
            return(
                <div onClick={(evt) => this.props.updateTaskFunc(evt, this.props.task)}>
                {this.props.task.description}
                <DeleteButton onClick={(evt) => this.props.deleteTask(evt, this.props.task.id)}>
                    X
                </DeleteButton>
            </div>
            )
        }
    }

    render() {
        const DeleteButton = styled.button`
            color: palevioletred;
            font-size: 1em;
            border: 2px solid palevioletred;
            border-radius: 3px;
            width: 5%;
            height: 20%;
            font-size: 20%;
            text-align: center;
            float: right;
        `;

        return(<div>
            {/* <div onClick={(evt) => this.props.updateTask(evt, this.props.task)}>
                {this.props.task.description}
                <DeleteButton onClick={(evt) => this.props.deleteTask(evt, this.props.task.id)}>
                    X
                </DeleteButton>
            </div> */}
            {this.renderTaskOrForm()}
        </div>)
    }
}

export default Task