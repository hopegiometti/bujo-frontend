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
        let datesUnderFifteen = []
        for (let i=1; i<=15; i++) {
            let eventForSpecificDate = this.props.events.filter(event => event.date === i)
            if (eventForSpecificDate) {
                datesUnderFifteen.push(<GridListTile><DateComponent date={i} key={i}  event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/></GridListTile>)
            } else {
                datesUnderFifteen.push(<GridListTile><DateComponent date={i} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/></GridListTile>)
            }
        }
        return datesUnderFifteen
    }

    renderDates = () => {
        console.log(this.props.page.month)
        let dates = []
        
        if (this.props.page.month === "September" || this.props.page.month === "April" || this.props.page.month === "June" || this.props.page.month === "November") {
            for (let i = 16; i <= 30; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                // console.log(eventForSpecificDate)
                if (eventForSpecificDate) {
                    dates.push(<GridListTile><DateComponent date={i} key={i}  event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/></GridListTile>)
                } else {
                    dates.push(<GridListTile><DateComponent date={i} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/></GridListTile>)
                }
            }
        } else if (this.props.page.month === "February") {
            for (let i = 16; i <= 29; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                // console.log(eventForSpecificDate)
                if (eventForSpecificDate) {
                    dates.push(<GridListTile><DateComponent date={i} key={i} event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/></GridListTile>)
                } else {
                    dates.push(<GridListTile><DateComponent date={i} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/></GridListTile>)
                }
            }
        } else {
            console.log("hi from 31")
            for (let i = 16; i <= 31; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                // console.log(eventForSpecificDate)
                if (eventForSpecificDate) {
                    dates.push(<GridListTile><DateComponent date={i} key={i} event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/></GridListTile>)
                } else {
                    dates.push(<GridListTile><DateComponent date={i} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/></GridListTile>)
                }
            }
        }
        return dates
    }
    render() {
        const ColumnOne = styled.div`
            display: flex;
            justify-content: space-evenly;
            flex-direction: column
        `

        const ColumnTwo = styled.div`
            display: flex;
            justify-content: space-evenly;
            flex-direction: column
            float: left;
        `


        console.log(this.props.page.month)
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