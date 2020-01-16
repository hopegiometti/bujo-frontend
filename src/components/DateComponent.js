import React from 'react'
import Event from './Event'
import EventForm from './EventForm'
import { connect } from 'react-redux'
import { updateEvent } from '../redux/actions'
import { addEvent } from '../redux/actions'
import styled from 'styled-components';
import { flexbox } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';


class DateComponent extends React.Component {
    state={
        name: '',
        updateEvent: false,
        event: {},
        page_id: this.props.page.id ,
        date: 1,
        hover: false
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
        
        this.setState({
            [evt.target.name]: evt.target.value
    })}

    updateEvent = (eventToUpdate) => {
        
        
        if (this.props.date === eventToUpdate.date) {
            this.setState({
                updateEvent: true,
                name: eventToUpdate.name,
                event: eventToUpdate
            })
        }
    }

    handleUpdateSubmit = (evt, eventDate) => {
        evt.preventDefault()
        
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
            
          this.props.updateEvent(updatedEvent)
          this.setState({
              updateEvent: false
          })  
        })
    }

    handleNewSubmit = (evt, eventDate) => {
        evt.preventDefault()
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

    toggleHover = () => {
        if (this.state.hover) {
            this.setState({
                hover: false
            })
        } else {
            this.setState({
                hover: true
            })
        }
    }



    renderEvents = () => {
        const NumberStyle = styled.div`
            float: left;
        `;

        if (this.props.dayName) {
            let dayInitial = this.props.dayName.split("")[0]

            if (this.props.event[0]) {
                if (this.state.updateEvent) {
                
                    return(<div>
                            <NumberStyle>{this.props.date}{dayInitial}</NumberStyle> <EventForm date={this.props.date} handleEventNameChange={this.handleEventNameChange} handleUpdateSubmit={this.handleUpdateSubmit} event={this.state.event}/>
                    </div>)
                } else {
                    return(<div>
                            <NumberStyle>{this.props.date}{dayInitial}</NumberStyle><Event event={this.props.event[0]} deleteEvent={this.props.deleteEvent} updateEvent={this.updateEvent}/>
                    </div>)
                }
            } else {
                return(<div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                    {this.renderNewForm()}
                </div>)
            } 
        } 
    }

    renderNewForm = () => {
        const InvisibleForm = styled.div`
            visibility: hidden
        `;

        const NumberStyle = styled.div`
            float: left;
        `;

        if (this.props.dayName) {
            let dayInitial = this.props.dayName.split("")[0]
        
            if (this.state.hover) {
                return (<><NumberStyle>{this.props.date}{dayInitial}</NumberStyle><EventForm date={this.props.date} handleNewSubmit={this.handleNewSubmit} handleEventNameChange={this.handleEventNameChange}/></>)
            } else {
                return (<><NumberStyle>{this.props.date}{dayInitial}</NumberStyle><InvisibleForm><EventForm date={this.props.date} handleNewSubmit={this.handleNewSubmit} handleEventNameChange={this.handleEventNameChange}/></InvisibleForm></>)
            }
        }
    }

    render() {
        return(<div>
            {this.renderEvents()}
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.page,
    }
}

export default connect(mapStateToProps, { updateEvent, addEvent })(DateComponent)