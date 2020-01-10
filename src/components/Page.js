import React from 'react'
//components
import Event from './Event'
import EventForm from './EventForm'
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
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })}

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
            this.props.addEvent(newEvent)
            this.setState({
                formType: 'new'
            })
        })
      }
    
    updateEvent = (eventToUpdate) => {
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
          this.props.updateEvent(updatedEvent)  
        })
    }

    
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

        
        // console.log("hi from 121",this.props.events)
        return(<div>
            { this.props.page.month ? 
                <div>
                    {this.props.page.month}
                    <Title>Events:</Title>
                    <PageText>
                        {this.props.events.map(event => <Event key={event.id} event={event} deleteEvent={this.deleteEvent} updateEvent={this.updateEvent}/>)}
                    </PageText>
                    <div>
                        {this.state.formType === 'new' ? <EventForm page={this.props.page} handleNewSubmit={this.handleNewSubmit} handleChange={this.handleChange} name={this.state.name} date={this.state.date} type='new'/> : <EventForm page={this.props.page} handleUpdateSubmit={this.handleUpdateSubmit} handleChange={this.handleChange} name={this.state.name} date={this.state.date} type='update' />} 
                    </div> 
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