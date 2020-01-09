import React from 'react'
import { connect } from 'react-redux'
import { addEvent } from '../redux/actions'

class EventForm extends React.Component {
    state={
        name: '',
        date: 1,
        page_id: this.props.page.id
    }

    // handleSubmit = (evt) => {
    //     evt.preventDefault()
    //     console.log(this.state);
    //     fetch("http://localhost:3000/events", {
    //         method: "POST",
    //         headers: {
    //             'content-type': 'application/json',
    //             'accepts': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             name: this.state.name,
    //             date: this.state.date,
    //             page_id: this.state.page_id
    //         })
    //     })
    //     .then(r => r.json())
    //     .then((newEvent) => {
    //         console.log(newEvent)
    //         this.props.addEvent(newEvent)
    //     })
    //   }
    
    // handleChange = (evt) => {
    // this.setState({
    //     [evt.target.name]: evt.target.value
    // })}

    render() {
        console.log(this.props)
        return(<div>
            { this.props.type === 'new' ? 
                <div>
                <h3>New Event</h3>
                    <form onSubmit={this.props.handleNewSubmit}>
                    <label>Event Name</label>
                        <input
                            onChange={this.props.handleChange}
                            type="text"
                            name="name"
                            value={this.props.name}
                        />
                        <div>
                            <label>Date:</label>
                            <input
                                    onChange={this.props.handleChange}
                                    type="number"
                                    name="date"
                                    value={this.props.date}
                                />
                            <label> of {this.props.page.month}</label>
                        </div>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>   
                :
                <div>
                    <h3>Update Event</h3>
                    <form onSubmit={this.props.handleUpdateSubmit}>
                    <label>Event Name</label>
                        <input
                            onChange={this.props.handleChange}
                            type="text"
                            name="name"
                            value={this.props.name}
                        />
                        <div>
                            <label>Date:</label>
                            <input
                                    onChange={this.props.handleChange}
                                    type="number"
                                    name="date"
                                    value={this.props.date}
                                />
                            <label> of {this.props.page.month}</label>
                        </div>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            }
        </div>)
    }
}

export default connect(null, { addEvent })(EventForm)