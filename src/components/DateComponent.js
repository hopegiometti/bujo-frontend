import React from 'react'
import Event from './Event'
import EventForm from './EventForm'

class DateComponent extends React.Component {

    renderEvents = () => {
        console.log(this.props.event[0])
        if (this.props.event[0]) {
            return( <div>
                {this.props.date} - <Event event={this.props.event[0]} deleteEvent={this.props.deleteEvent}/>
            </div> )
        } else {
            return( <div>
                {this.props.date} - <EventForm date={this.props.date} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange}/>
            </div> )
        }
    }

    render() {
        return(<div>
            {this.renderEvents()}
        </div>)
    }
}

export default DateComponent