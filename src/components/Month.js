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
                    dates.push(<DateComponent date={i} key={i} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/>)
                } else {
                    dates.push(<DateComponent date={i} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/>)
                }
            }
        } else if (this.props.page.month === "February") {
            for (let i = 1; i <= 29; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                // console.log(eventForSpecificDate)
                if (eventForSpecificDate) {
                    dates.push(<DateComponent date={i} key={i} event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/>)
                } else {
                    dates.push(<DateComponent date={i} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/>)
                }
            }
        } else {
            for (let i = 1; i <= 31; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                // console.log(eventForSpecificDate)
                if (eventForSpecificDate) {
                    dates.push(<DateComponent date={i} key={i} event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/>)
                } else {
                    dates.push(<DateComponent date={i} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/>)
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