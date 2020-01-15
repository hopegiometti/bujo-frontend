import React from 'react'
//components 
import DateComponent from './DateComponent'
//styling
import { flexbox } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { makeStyles, GridListTile } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import styled from 'styled-components';



class Month extends React.Component {
 
    renderDatesUnderFifteen = () => {
        const BorderedDate = styled.div`
            border-bottom: 1px dashed lightgrey;
        `;


        let datesUnderFifteen = []
        if (this.props.page.month === "January" || this.props.page.month === "July") {
            let daysInJan ="Wednesday,Thursday,Friday,Saturday,Sunday,Monday,Tuesday"
            let januaryDays = []
            let splitJanDays = daysInJan.split(",")
    
            for (let i=1; i<=5; i++) {
                splitJanDays.map(week => januaryDays.push(week))
            }

            for (let i=1; i<=15; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                if (eventForSpecificDate) {
                    datesUnderFifteen.push(<GridListTile><BorderedDate><DateComponent dayName={januaryDays[i-1]} date={i} key={i}  event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/></BorderedDate></GridListTile>)
                } else {
                    datesUnderFifteen.push(<GridListTile><BorderedDate><DateComponent dayName={januaryDays[i-1]} date={i} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/></BorderedDate></GridListTile>)
                }
            }
        } else if (this.props.page.month === "February") {
            let daysInFeb = "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday"
            let febDays = []
            let splitFebDays = daysInFeb.split(",")

            for (let i=1; i<=5; i++) {
                splitFebDays.map(week => febDays.push(week))
            }

            for (let i=1; i<=15; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                if (eventForSpecificDate) {
                    datesUnderFifteen.push(<GridListTile><BorderedDate><DateComponent dayName={febDays[i-1]} date={i} key={i}  event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/></BorderedDate></GridListTile>)
                } else {
                    datesUnderFifteen.push(<GridListTile><BorderedDate><DateComponent dayName={febDays[i-1]} date={i} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/></BorderedDate></GridListTile>)
                }
            }
        } else if (this.props.page.month === "March") {
            let daysInMarch ="Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday"
            let marchDays = []
            let splitMarchDays = daysInMarch.split(",")
    
            for (let i=1; i<=5; i++) {
                splitMarchDays.map(week => marchDays.push(week))
            }

            for (let i = 1; i <= 15; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                if (eventForSpecificDate) {
                    datesUnderFifteen.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={marchDays[i-1]} key={i} event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/></BorderedDate></GridListTile>)
                } else {
                    datesUnderFifteen.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={marchDays[i-1]} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/></BorderedDate></GridListTile>)
                }
            }
        } else if (this.props.page.month === "April") {
            let daysInApril ="Wednesday,Thursday,Friday,Saturday,Sunday,Monday,Tuesday"
            let aprilDays = []
            let splitAprilDays = daysInApril.split(",")
    
            for (let i=1; i<=5; i++) {
                splitAprilDays.map(week => aprilDays.push(week))
            }

            for (let i = 1; i <= 15; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                if (eventForSpecificDate) {
                    datesUnderFifteen.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={aprilDays[i-1]} key={i} event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/></BorderedDate></GridListTile>)
                } else {
                    datesUnderFifteen.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={aprilDays[i-1]} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/></BorderedDate></GridListTile>)
                }
            }
        } else if (this.props.page.month === "May") {
            let daysInMay ="Friday,Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday"
            let mayDays = []
            let splitMayDays = daysInMay.split(",")
    
            for (let i=1; i<=5; i++) {
                splitMayDays.map(week => mayDays.push(week))
            }

            for (let i = 1; i <= 15; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                if (eventForSpecificDate) {
                    datesUnderFifteen.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={mayDays[i-1]} key={i} event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/></BorderedDate></GridListTile>)
                } else {
                    datesUnderFifteen.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={mayDays[i-1]} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/></BorderedDate></GridListTile>)
                }
            }
        } else if (this.props.page.month === "June") {
            let daysInJune ="Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday"
            let juneDays = []
            let splitJuneDays = daysInJune.split(",")
    
            for (let i=1; i<=5; i++) {
                splitJuneDays.map(week => juneDays.push(week))
            }

            for (let i = 1; i <= 15; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                if (eventForSpecificDate) {
                    datesUnderFifteen.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={juneDays[i-1]} key={i} event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/></BorderedDate></GridListTile>)
                } else {
                    datesUnderFifteen.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={juneDays[i-1]} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/></BorderedDate></GridListTile>)
                }
            }
        } else if (this.props.page.month === "August") {
            let daysInAugust ="Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday"
            let augustDays = []
            let splitAugustDays = daysInAugust.split(",")
    
            for (let i=1; i<=5; i++) {
                splitAugustDays.map(week => augustDays.push(week))
            }

            for (let i = 1; i <= 15; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                if (eventForSpecificDate) {
                    datesUnderFifteen.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={augustDays[i-1]} key={i} event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/></BorderedDate></GridListTile>)
                } else {
                    datesUnderFifteen.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={augustDays[i-1]} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/></BorderedDate></GridListTile>)
                }
            }
        } else if (this.props.page.month === "September") {
            let daysInSeptember ="Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday,Monday"
            let septemberDays = []
            let splitSeptemberDays = daysInSeptember.split(",")
    
            for (let i=1; i<=5; i++) {
                splitSeptemberDays.map(week => septemberDays.push(week))
            }

            for (let i = 1; i <= 15; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                if (eventForSpecificDate) {
                    datesUnderFifteen.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={septemberDays[i-1]} key={i} event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/></BorderedDate></GridListTile>)
                } else {
                    datesUnderFifteen.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={septemberDays[i-1]} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/></BorderedDate></GridListTile>)
                }
            }
        } else if (this.props.page.month === "October") {
            let daysInOctober ="Thursday,Friday,Saturday,Sunday,Monday,Tuesday,Wednesday"
            let octoberDays = []
            let splitOctoberDays = daysInOctober.split(",")
    
            for (let i=1; i<=5; i++) {
                splitOctoberDays.map(week => octoberDays.push(week))
            }

            for (let i = 1; i <= 15; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                if (eventForSpecificDate) {
                    datesUnderFifteen.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={octoberDays[i-1]} key={i} event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/></BorderedDate></GridListTile>)
                } else {
                    datesUnderFifteen.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={octoberDays[i-1]} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/></BorderedDate></GridListTile>)
                }
            }
        } else if (this.props.page.month === "December") {
            let daysInDecember ="Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday,Monday"
            let decemberDays = []
            let splitDecemberDays = daysInDecember.split(",")
    
            for (let i=1; i<=5; i++) {
                splitDecemberDays.map(week => decemberDays.push(week))
            }

            for (let i = 1; i <= 15; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                if (eventForSpecificDate) {
                    datesUnderFifteen.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={decemberDays[i-1]} key={i} event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/></BorderedDate></GridListTile>)
                } else {
                    datesUnderFifteen.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={decemberDays[i-1]} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/></BorderedDate></GridListTile>)
                }
            }
        } else if (this.props.page.month === "November") {
            let daysInNovember ="Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday"
            let novDays = []
            let splitNovemberDays = daysInNovember.split(",")
    
            for (let i=1; i<=5; i++) {
                splitNovemberDays.map(week => novDays.push(week))
            }

            for (let i = 1; i <= 15; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                if (eventForSpecificDate) {
                    datesUnderFifteen.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={novDays[i-1]} key={i} event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/></BorderedDate></GridListTile>)
                } else {
                    datesUnderFifteen.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={novDays[i-1]} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/></BorderedDate></GridListTile>)
                }
            } 
        }


        return datesUnderFifteen
    }

    renderDates = () => {
        const BorderedDate = styled.div`
            border-bottom: 1px dashed lightgrey;
        `;

        let dates = []
        if (this.props.page.month === "November") {
            let daysInNovember ="Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday"
            let novDays = []
            let splitNovemberDays = daysInNovember.split(",")
    
            for (let i=1; i<=5; i++) {
                splitNovemberDays.map(week => novDays.push(week))
            }

            for (let i = 16; i <= 30; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                if (eventForSpecificDate) {
                    dates.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={novDays[i-1]} key={i} event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/></BorderedDate></GridListTile>)
                } else {
                    dates.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={novDays[i-1]} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/></BorderedDate></GridListTile>)
                }
            } 
        } else if (this.props.page.month === "February") {
            let daysInFeb = "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday"
            let febDays = []
            let splitFebDays = daysInFeb.split(",")

            for (let i=1; i<=5; i++) {
                splitFebDays.map(week => febDays.push(week))
            }

            for (let i = 16; i <= 29; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                if (eventForSpecificDate) {
                    dates.push(<GridListTile><BorderedDate><DateComponent dayName={febDays[i-1]} date={i} key={i} event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/></BorderedDate></GridListTile>)
                } else {
                    dates.push(<GridListTile><BorderedDate><DateComponent dayName={febDays[i-1]} date={i} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/></BorderedDate></GridListTile>)
                }
            }
        } else if (this.props.page.month === "January" || this.props.page.month === "July") {
            let daysInJan ="Wednesday,Thursday,Friday,Saturday,Sunday,Monday,Tuesday"
            let januaryDays = []
            let splitJanDays = daysInJan.split(",")
    
            for (let i=1; i<=5; i++) {
                splitJanDays.map(week => januaryDays.push(week))
            }

            for (let i = 16; i <= 31; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                if (eventForSpecificDate) {
                    dates.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={januaryDays[i-1]} key={i} event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/></BorderedDate></GridListTile>)
                } else {
                    dates.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={januaryDays[i-1]} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/></BorderedDate></GridListTile>)
                }
            }
        } else if (this.props.page.month === "March") {
            let daysInMarch ="Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday"
            let marchDays = []
            let splitMarchDays = daysInMarch.split(",")
    
            for (let i=1; i<=5; i++) {
                splitMarchDays.map(week => marchDays.push(week))
            }

            for (let i = 16; i <= 31; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                if (eventForSpecificDate) {
                    dates.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={marchDays[i-1]} key={i} event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/></BorderedDate></GridListTile>)
                } else {
                    dates.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={marchDays[i-1]} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/></BorderedDate></GridListTile>)
                }
            }
        } else if (this.props.page.month === "April") {
            let daysInApril ="Wednesday,Thursday,Friday,Saturday,Sunday,Monday,Tuesday"
            let aprilDays = []
            let splitAprilDays = daysInApril.split(",")
    
            for (let i=1; i<=5; i++) {
                splitAprilDays.map(week => aprilDays.push(week))
            }

            for (let i = 16; i <= 30; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                if (eventForSpecificDate) {
                    dates.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={aprilDays[i-1]} key={i} event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/></BorderedDate></GridListTile>)
                } else {
                    dates.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={aprilDays[i-1]} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/></BorderedDate></GridListTile>)
                }
            }  
        } else if (this.props.page.month === "May") {
            let daysInMay ="Friday,Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday"
            let mayDays = []
            let splitMayDays = daysInMay.split(",")
    
            for (let i=1; i<=5; i++) {
                splitMayDays.map(week => mayDays.push(week))
            }

            for (let i = 16; i <= 31; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                if (eventForSpecificDate) {
                    dates.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={mayDays[i-1]} key={i} event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/></BorderedDate></GridListTile>)
                } else {
                    dates.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={mayDays[i-1]} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/></BorderedDate></GridListTile>)
                }
            }  
        } else if (this.props.page.month === "June") {
            let daysInJune ="Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday"
            let juneDays = []
            let splitJuneDays = daysInJune.split(",")
    
            for (let i=1; i<=5; i++) {
                splitJuneDays.map(week => juneDays.push(week))
            }

            for (let i = 16; i <= 30; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                if (eventForSpecificDate) {
                    dates.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={juneDays[i-1]} key={i} event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/></BorderedDate></GridListTile>)
                } else {
                    dates.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={juneDays[i-1]} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/></BorderedDate></GridListTile>)
                }
            }
        } else if (this.props.page.month === "August") {
            let daysInAugust ="Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday"
            let augustDays = []
            let splitAugustDays = daysInAugust.split(",")
    
            for (let i=1; i<=5; i++) {
                splitAugustDays.map(week => augustDays.push(week))
            }

            for (let i = 16; i <= 31; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                if (eventForSpecificDate) {
                    dates.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={augustDays[i-1]} key={i} event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/></BorderedDate></GridListTile>)
                } else {
                    dates.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={augustDays[i-1]} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/></BorderedDate></GridListTile>)
                }
            }
        } else if (this.props.page.month === "September") {
            let daysInSeptember ="Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday,Monday"
            let septemberDays = []
            let splitSeptemberDays = daysInSeptember.split(",")
    
            for (let i=1; i<=5; i++) {
                splitSeptemberDays.map(week => septemberDays.push(week))
            }

            for (let i = 16; i <= 30; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                if (eventForSpecificDate) {
                    dates.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={septemberDays[i-1]} key={i} event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/></BorderedDate></GridListTile>)
                } else {
                    dates.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={septemberDays[i-1]} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/></BorderedDate></GridListTile>)
                }
            }
        } else if (this.props.page.month === "October") {
            let daysInOctober ="Thursday,Friday,Saturday,Sunday,Monday,Tuesday,Wednesday"
            let octoberDays = []
            let splitOctoberDays = daysInOctober.split(",")
    
            for (let i=1; i<=5; i++) {
                splitOctoberDays.map(week => octoberDays.push(week))
            }

            for (let i = 16; i <= 31; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                if (eventForSpecificDate) {
                    dates.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={octoberDays[i-1]} key={i} event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/></BorderedDate></GridListTile>)
                } else {
                    dates.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={octoberDays[i-1]} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/></BorderedDate></GridListTile>)
                }
            }
        } else if (this.props.page.month === "December") {
            let daysInDecember ="Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday,Monday"
            let decemberDays = []
            let splitDecemberDays = daysInDecember.split(",")
    
            for (let i=1; i<=5; i++) {
                splitDecemberDays.map(week => decemberDays.push(week))
            }

            for (let i = 16; i <= 31; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                if (eventForSpecificDate) {
                    dates.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={decemberDays[i-1]} key={i} event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/></BorderedDate></GridListTile>)
                } else {
                    dates.push(<GridListTile><BorderedDate><DateComponent date={i} dayName={decemberDays[i-1]} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/></BorderedDate></GridListTile>)
                }
            }
        }
        return dates
    }
    render() {

        const ColumnOne = styled.div`
            display: flex;
            justify-content: space-evenly;
            flex-direction: column;
            border-right: 1px solid lightgrey;
        `

        const ColumnTwo = styled.div`
            display: flex;
            justify-content: space-evenly;
            flex-direction: column
            float: left;
        `


        return(
        <div>
            <GridList cellHeight='auto'>
                <ColumnOne>
                    {this.renderDatesUnderFifteen()}
                </ColumnOne>
                <ColumnTwo>
                    {this.renderDates()}
                </ColumnTwo>
            </GridList>
        </div>)
    }
}
export default Month