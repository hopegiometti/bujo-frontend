import React from 'react'
//components
import Month from './Month'
import Week from './Week'
import HabitTracker from './HabitTracker';
import List from './List'
//styling
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import SettingsOutlinedIcon from '@material-ui/icons/Settings';
//redux
import { connect } from 'react-redux'
import { setEvents } from '../redux/actions'
import { deleteEvent } from '../redux/actions'
import { addEvent } from '../redux/actions'
import { updateEvent } from '../redux/actions'




class Page extends React.Component {
    state={
        formType: 'new',
        name: '',
        date: 1,
        page_id: this.props.page.id,
        event: {},
        layout: this.props.page.layout
    }

    //form methods
    handleEventNameChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })}

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
            this.setState({
                formType: 'new'
            })
        })
    }
    
    renderSpecificLayout = () => {
        const Title = styled.h3`
            font-size: 1.2em;
            text-align: left;
            color: palevioletred;
        `;

        
        if (this.props.page.layout === "Monthly Log") {
            return (<>
            <Title>{this.props.page.month} Events:</Title>
            <Month page={this.props.page} events={this.props.events} handleNewSubmit={this.handleNewSubmit} handleEventNameChange={this.handleEventNameChange} deleteEvent={this.deleteEvent} formType={this.state.formType}/>
            </>)
        } else if (this.props.page.layout.includes("Weekly Log")) {
            return(<>
                <Week page={this.props.page} events={this.props.events}/>
            </>)
        } else if (this.props.page.layout.includes("Habit Tracker")) {
            return(<>
                <HabitTracker />
            </>)
        } else if (this.props.page.layout.includes("List")) {
            return(<>
                <List />
            </>)
        }
    }
    
    //other methods
    deleteEvent = (eventToDelete) => {
        fetch(`http://localhost:3000/events/${eventToDelete.id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then((msg) => {
            this.props.deleteEvent(msg.data.id)
        })
    }

    
    //render (duh)
    render() {

        //styled components
        const Title = styled.h3`
            font-size: 1.2em;
            text-align: left;
            color: palevioletred;
        `;
        const PageText = styled.div`
            font-size: 1em;
            text-align: left;
            color: palevioletred;
        `;
        const SettingsSpan = styled.span`
            float: right;
            color: palevioletred;
        `;
        

        
        return(<div>
            { this.props.page.month ?
                <div>
                <p>    </p>
                    <Container maxWidth="md">
                        <Paper elevation={3} style={{ padding: 0, margin: 0}}>
                        <SettingsSpan onClick={(evt) => this.props.togglePageForm(evt, this.props.page)}><SettingsOutlinedIcon /></SettingsSpan>
                            {this.renderSpecificLayout()}
                        </Paper>
                    </Container>
                </div>
            : null}
           
        </div>)
    }
}

export default connect(null, { deleteEvent, addEvent, updateEvent, setEvents } )(Page)