import React from 'react'
import Event from './Event'

class DayComponent extends React.Component {
    renderEvents = () => {
        let eventForDay = this.props.events.filter(event => event.date === this.props.dayOfMonth)
        // console.log(eventForDay[0])
        let theEvent = eventForDay[0]
        if (theEvent) {
            return (<div><Event event={theEvent} /></div>)
        }


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