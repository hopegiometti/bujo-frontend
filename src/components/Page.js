import React from 'react'
import Event from './Event'
import styled from 'styled-components';
import EventForm from './EventForm'
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
        event: {}
    }

    handleNewSubmit = (evt) => {
        evt.preventDefault()
        fetch("http://localhost:3000/events", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'accepts': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                date: this.state.date,
                page_id: this.state.page_id
            })
        })
        .then(r => r.json())
        .then((newEvent) => {
            console.log(newEvent)
            this.props.addEvent(newEvent)
            this.setState({
                formType: 'new'
            })
        })
      }
    
    handleChange = (evt) => {
    this.setState({
        [evt.target.name]: evt.target.value
    })}

    componentDidMount() {
        fetch("http://localhost:3000/events")
        .then(r => r.json())
        .then((events) => {
            this.props.setEvents(events)
        })
    }

    deleteEvent = (eventToDelete) => {
        // console.log(eventToDelete.id)
        fetch(`http://localhost:3000/events/${eventToDelete.id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then((msg) => {
            console.log(msg.data)
            this.props.deleteEvent(msg.data.id)
        })
    }

    updateEvent = (eventToUpdate) => {
        console.log(eventToUpdate)
        this.setState({
            formType: 'update',
            name: eventToUpdate.name,
            date: eventToUpdate.date,
            event: eventToUpdate
        })
    }

    handleUpdateSubmit = (evt) => {
        evt.preventDefault()
        fetch(`http://localhost:3000/events/${this.state.event.id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                'accepts': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                date: this.state.date,
                page_id: this.state.page_id
            })
        })
        .then(r => r.json())
        .then((updatedEvent) => {
          console.log(updatedEvent)
          this.props.updateEvent(updatedEvent)  
        })
    }

    render() {
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

        console.log(this.props)
        let sortedEvents = this.props.events.sort((a, b) => a.date - b.date)
        return(<div>
            {this.props.page.month}
            <Title>Events:</Title>
            <PageText>
                {sortedEvents.map(event => <Event key={event.id} event={event} deleteEvent={this.deleteEvent} updateEvent={this.updateEvent}/>)}
            </PageText>
            <div>
               {this.state.formType === 'new' ? <EventForm page={this.props.page} handleNewSubmit={this.handleNewSubmit} handleChange={this.handleChange} name={this.state.name} date={this.state.date} type='new'/> : <EventForm page={this.props.page} handleUpdateSubmit={this.handleUpdateSubmit} handleChange={this.handleChange} name={this.state.name} date={this.state.date} type='update' />} 
            </div>
        </div>)
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        events: state.events
    }
}

export default connect(mapStateToProps, { setEvents, deleteEvent, addEvent, updateEvent } )(Page)