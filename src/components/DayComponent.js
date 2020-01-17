import React from 'react'
import Event from './Event'

class DayComponent extends React.Component {
    renderEvents = () => {
        let eventForDay = this.props.events.filter(event => event.date === this.props.dayOfMonth)
        let theEvent = eventForDay[0]
        if (theEvent) {
            return (<div><Event event={theEvent} /></div>)
        }
    }

    render() {
        return(<div>
            {this.props.name} {this.props.dayOfMonth}
            {this.renderEvents()}
        </div>)
    }
}

export default DayComponent