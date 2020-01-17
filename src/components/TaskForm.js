import React from 'react'

class TaskForm extends React.Component {
    renderTaskForm = () => {
        // if (this.props.updateTask) {
            return (<div>
                <form onSubmit={(evt) => this.props.handleNewTaskSubmit(evt)}>
                        <input
                            onChange={this.props.handleDescriptionChange}
                            type="text"
                            name="description"
                            value={this.props.description}
                            placeholder="new task"
                        />
                        <input type="submit" value="add"/>
                    </form>
            </div>)
        // } else {
        //     return (<div>
        //         <form onSubmit={(evt) => this.props.handleUpdateTaskSubmit(evt)}>
        //                 <input
        //                     onChange={this.props.handleDescriptionChange}
        //                     type="text"
        //                     name="description"
        //                     value={this.props.description}
        //                     placeholder={this.props.task.description}
        //                 />
        //                 <input type="submit" value="add"/>
        //             </form>
        //     </div>)
        // }
    }

    render() {
        // return (<div>
        //     <form onSubmit={(evt) => this.props.handleNewTaskSubmit(evt)}>
        //             <input
        //                 onChange={this.props.handleDescriptionChange}
        //                 type="text"
        //                 name="description"
        //                 value={this.props.description}
        //                 placeholder="new task"
        //             />
        //             <input type="submit" value="add"/>
        //         </form>
        // </div>)
        return(<>
            {this.renderTaskForm()}
        </>)
    }
}

export default TaskForm