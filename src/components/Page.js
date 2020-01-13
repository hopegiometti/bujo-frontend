import React from 'react'
//components
import Event from './Event'
import EventForm from './EventForm'
import Month from './Month'
//styling
import styled from 'styled-components';
//redux
import { connect } from 'react-redux'
import { setEvents } from '../redux/actions'
import { deleteEvent } from '../redux/actions'
import { addEvent } from '../redux/actions'
import { updateEvent } from '../redux/actions'


class Page extends React.Component {
    state={
        formType: 'new',
        name: '',
        date: 1,
        page_id: this.props.page.id,
        event: {},
        layout: this.props.page.layout
    }

    //lifecycle
    componentDidMount() {
        // console.log(this.props, this.props.page.events)
        // this.props.setEvents(this.props.page.events)

    }

    //form methods
    handleEventNameChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })}

    handleNewSubmit = (evt, eventDate) => {
        evt.preventDefault()
        console.log("hi from new submit")
        fetch("http://localhost:3000/events", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'accepts': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                date: eventDate,
                page_id: this.state.page_id
            })
        })
        .then(r => r.json())
        .then((newEvent) => {
            this.props.addEvent(newEvent)
            this.setState({
                formType: 'new'
            })
        })
      }
    
    // updateEvent = (eventToUpdate) => {
    //     this.setState({
    //         formType: 'update',
    //         name: eventToUpdate.name,
    //         // date: eventToUpdate.date,
    //         event: eventToUpdate
    //     })
    // }

    // handleUpdateSubmit = (evt, eventDate) => {
    //     evt.preventDefault()
    //     fetch(`http://localhost:3000/events/${this.state.event.id}`, {
    //         method: "PATCH",
    //         headers: {
    //             'content-type': 'application/json',
    //             'accepts': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             name: this.state.name,
    //             date: eventDate,
    //             page_id: this.state.page_id
    //         })
    //     })
    //     .then(r => r.json())
    //     .then((updatedEvent) => {
    //       this.props.updateEvent(updatedEvent)  
    //     })
    // }

    
    //other methods
    deleteEvent = (eventToDelete) => {
        // console.log("clicked")
        fetch(`http://localhost:3000/events/${eventToDelete.id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then((msg) => {
            this.props.deleteEvent(msg.data.id)
        })
    }

    
    //render (duh)
    render() {
        console.log(this.props, this.props.events)

        //styled components
        const Title = styled.h3`
            font-size: 1.2em;
            text-align: left;
            color: palevioletred;
        `;
        const PageText = styled.div`
            font-size: 1em;
            text-align: left;
            color: palevioletred;
        `

        
        console.log("hi from 123",this.props.events)
        return(<div>
            { this.props.page.month ? 
                <div>
                    {this.props.page.month}
                    <Title>Events:</Title>
                    <Month page={this.props.page} events={this.props.events} handleNewSubmit={this.handleNewSubmit} handleEventNameChange={this.handleEventNameChange} deleteEvent={this.deleteEvent} formType={this.state.formType}/>
                </div>
            : null}
           
        </div>)
    }
}

// const mapStateToProps = (state) => {
//     return {
//         events: state.events
//     }
// }

export default connect(null, { deleteEvent, addEvent, updateEvent, setEvents } )(Page)