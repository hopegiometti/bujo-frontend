import React from 'react'
import Event from './Event'
import EventForm from './EventForm'
import { connect } from 'react-redux'
import { updateEvent } from '../redux/actions'
import { addEvent } from '../redux/actions'

class DateComponent extends React.Component {
    state={
        name: '',
        updateEvent: false,
        event: {},
        page_id: this.props.page.id ,
        date: 1
    }

    // state={
    //     formType: 'new',
    //     name: '',
    //     date: 1,
    //     page_id: this.props.page.id,
    //     event: {},
    //     layout: this.props.page.layout
    // }

    handleEventNameChange = (evt) => {
        console.log(evt.target.name, evt.target.value)
        this.setState({
            [evt.target.name]: evt.target.value
        })}

    updateEvent = (eventToUpdate) => {
        
        console.log(this.props.date, eventToUpdate.date)
        if (this.props.date === eventToUpdate.date) {
            this.setState({
                updateEvent: true,
                name: eventToUpdate.name,
                // date: eventToUpdate.date,
                event: eventToUpdate
            }, () => console.log(this.state))
        }
    }

    handleUpdateSubmit = (evt, eventDate) => {
        evt.preventDefault()
        console.log(this.state.event.id, eventDate, this.state.name)
        fetch(`http://localhost:3000/events/${this.state.event.id}`, {
            method: "PATCH",
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
        .then((updatedEvent) => {
            console.log(updatedEvent)
          this.props.updateEvent(updatedEvent)
          this.setState({
              updateEvent: false
          })  
        })
    }

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
        })
    }



    renderEvents = () => {
        console.log(this.props.event[0], this.state.updateEvent)
        if (this.props.event[0]) {
            if (this.state.updateEvent) {
                console.log("hi")
                return( <div>
                    {this.props.date} - <EventForm date={this.props.date} handleEventNameChange={this.handleEventNameChange} handleUpdateSubmit={this.handleUpdateSubmit} event={this.state.event}/>
                </div> )
            } else {
                return( <div>
                    {this.props.date} - <Event event={this.props.event[0]} deleteEvent={this.props.deleteEvent} updateEvent={this.updateEvent}/>
                </div> )
            }
        } else {
            return( <div>
                {this.props.date} - <EventForm date={this.props.date} handleNewSubmit={this.handleNewSubmit} handleEventNameChange={this.handleEventNameChange} />
            </div> )
        }
    }

    render() {
        return(<div>
            {this.renderEvents()}
        </div>)
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        page: state.page,
    }
}

export default connect(mapStateToProps, { updateEvent, addEvent })(DateComponent)