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
        for (let i=1; i<=15; i++) {
            let eventForSpecificDate = this.props.events.filter(event => event.date === i)
            if (eventForSpecificDate) {
                datesUnderFifteen.push(<GridListTile><BorderedDate><DateComponent date={i} key={i}  event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/></BorderedDate></GridListTile>)
            } else {
                datesUnderFifteen.push(<GridListTile><BorderedDate><DateComponent date={i} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/></BorderedDate></GridListTile>)
            }
        }
        return datesUnderFifteen
    }

    renderDates = () => {
        const BorderedDate = styled.div`
            border-bottom: 1px dashed lightgrey;
        `;

        let dates = []
        if (this.props.page.month === "September" || this.props.page.month === "April" || this.props.page.month === "June" || this.props.page.month === "November") {
            for (let i = 16; i <= 30; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                if (eventForSpecificDate) {
                    dates.push(<GridListTile><BorderedDate><DateComponent date={i} key={i}  event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/></BorderedDate></GridListTile>)
                } else {
                    dates.push(<GridListTile><BorderedDate><DateComponent date={i} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/></BorderedDate></GridListTile>)
                }
            }
        } else if (this.props.page.month === "February") {
            for (let i = 16; i <= 29; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                if (eventForSpecificDate) {
                    dates.push(<GridListTile><BorderedDate><DateComponent date={i} key={i} event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/></BorderedDate></GridListTile>)
                } else {
                    dates.push(<GridListTile><BorderedDate><DateComponent date={i} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/></BorderedDate></GridListTile>)
                }
            }
        } else {
            for (let i = 16; i <= 31; i++) {
                let eventForSpecificDate = this.props.events.filter(event => event.date === i)
                if (eventForSpecificDate) {
                    dates.push(<GridListTile><BorderedDate><DateComponent date={i} key={i} event={eventForSpecificDate} handleEventNameChange={this.props.handleEventNameChange} deleteEvent={this.props.deleteEvent} handleUpdateSubmit={this.props.handleUpdateSubmit} updateEvent={this.props.updateEvent} formType={this.props.formType}/></BorderedDate></GridListTile>)
                } else {
                    dates.push(<GridListTile><BorderedDate><DateComponent date={i} key={i} handleNewSubmit={this.props.handleNewSubmit} handleEventNameChange={this.props.handleEventNameChange} formType={this.props.formType}/></BorderedDate></GridListTile>)
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