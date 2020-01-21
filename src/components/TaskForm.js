import React from 'react'
//styling
import styled from 'styled-components';
import { Input } from '../Styled'

class TaskForm extends React.Component {
    renderTaskForm = () => {

            return (<div>
                <form onSubmit={(evt) => this.props.handleNewTaskSubmit(evt)}>
                        <Input
                            onChange={this.props.handleDescriptionChange}
                            type="text"
                            name="description"
                            value={this.props.description}
                            placeholder="new task"
                        />
                        <Input type="submit" value="add"/>
                    </form>
            </div>)
       
    }
    render() {
        return(<>
            {this.renderTaskForm()}
        </>)
    }
}

export default TaskForm