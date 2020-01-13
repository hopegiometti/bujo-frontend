import React from 'react'
//components 
import DateComponent from './DateComponent'

class Month extends React.Component {

    renderDates = () => {
        
        let dates = []
        if (this.props.page.month === "September" || this.props.page.month === "April" || this.props.page.month === "June" || this.props.page.month === "November") {
            for (let i = 1; i <= 30; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                // console.log(eventForSpecificDate)
                if (eventForSpecificDate) {
                    dates.push(<DateComponent date={i} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent}/>)
                } else {
                    dates.push(<DateComponent date={i} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent}/>)
                }
            }
        } else if (this.props.page.month === "February") {
            for (let i = 1; i <= 29; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                // console.log(eventForSpecificDate)
                if (eventForSpecificDate) {
                    dates.push(<DateComponent date={i} key={i} event={eventForSpecificDate} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent}/>)
                } else {
                    dates.push(<DateComponent date={i} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent}/>)
                }
            }
        } else {
            for (let i = 1; i <= 31; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                // console.log(eventForSpecificDate)
                if (eventForSpecificDate) {
                    dates.push(<DateComponent date={i} key={i} event={eventForSpecificDate} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent}/>)
                } else {
                    dates.push(<DateComponent date={i} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent}/>)
                }
            }
        }
        return dates
    }

    render() {
        console.log(this.props.page.month)
        return(
        <div>
            {this.renderDates()}
        </div>)
    }
}
export default Month