import React from 'react'
import Event from './Event'

class DayComponent extends React.Component {
    renderEvents = () => {
        console.log(this.props.events)
        // let eventForDay = this.props.events.map(event => console.log(event.date))
        // console.log(eventForDay)
        // if (eventForDay) {
            // return <Event event={eventForDay}/>
        // }
    }

    render() {
        return(<div>
            {this.props.name} {this.props.dayOfMonth}
            {this.renderEvents()}
        </div>)
    }
}

export default DayComponent