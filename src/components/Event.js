import React from 'react'
import styled from 'styled-components';

class Event extends React.Component {
    render() {
        
        const EventInfo = styled.span`
            font-size: 1em;
            text-align: left;
            color: palevioletred;
        `;

        const DeleteButton = styled.button`
            color: palevioletred;
            font-size: 1em;
            border: 2px solid palevioletred;
            border-radius: 3px;
        `;

        console.log("hi from event!", this.props.event.name)
        return(<div>
            <EventInfo onClick={() => this.props.updateEvent(this.props.event)}>
             {this.props.event.date} {this.props.event.name}
            </EventInfo>
            <DeleteButton onClick={()=> this.props.deleteEvent(this.props.event)}>
                X
            </DeleteButton>
        </div>)
    }
}

export default Event