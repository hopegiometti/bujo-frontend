import React from 'react'
import Event from './Event'
import styled from 'styled-components';
import EventForm from './EventForm'
import { connect } from 'react-redux'
import { setEvents } from '../redux/actions'


class Page extends React.Component {
    componentDidMount() {
        fetch("http://localhost:3000/events")
        .then(r => r.json())
        .then((events) => {
            this.props.setEvents(events)
        })
    }

    render() {
        const Title = styled.h3`
            font-size: 1.2em;
            text-align: left;
            color: palevioletred;
        `;
        console.log(this.props)
        return(<div>
            {this.props.page.month}
            <Title>Events:</Title>
            {this.props.events.map(event => <Event key={event.id} event={event}/>)}
            <div>
                <EventForm page={this.props.page}/>
            </div>
        </div>)
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        events: state.events
    }
}

export default connect(mapStateToProps, { setEvents } )(Page)