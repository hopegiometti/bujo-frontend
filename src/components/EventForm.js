import React from 'react'
//redux
import { connect } from 'react-redux'
import { addEvent } from '../redux/actions'
//styling
import styled from 'styled-components';

class EventForm extends React.Component {
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
        const Input = styled.input`
            padding: 0.5em;
            margin: 0.5em;
            color: palevioletred;
            background: lightgrey;
            border: none;
            border-radius: 3px;
        `;
        
        console.log(this.props)
        return(<div>
            { this.props.event ? 
            <>
                <form onSubmit={(evt) => this.props.handleUpdateSubmit(evt, this.props.date)}>
                            <Input
                                onChange={this.props.handleEventNameChange}
                                type="text"
                                name="name"
                                value={this.props.name}
                                placeholder={this.props.event.name}
                            />
                        <Input type="submit" value="Submit"/>
                </form> 
            </>
            :
            <>
                <form onSubmit={(evt) => this.props.handleNewSubmit(evt, this.props.date)}>
                    <Input
                        onChange={this.props.handleEventNameChange}
                        type="text"
                        name="name"
                        value={this.props.name}
                        placeholder="new event"
                    />
                    <Input type="submit" value="Submit"/>
                </form>
            </>
            }

            {/* { this.props.type === 'new' ? 
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
            } */}
        </div>)
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        page: state.page,
    }
}

export default connect(mapStateToProps, { addEvent })(EventForm)