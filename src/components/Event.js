import React from 'react'
import styled from 'styled-components';

class Event extends React.Component {
    render() {
        
        const EventInfo = styled.p`
            font-size: 1em;
            text-align: left;
            color: palevioletred;
        `;


        return(<>
            <EventInfo>
             {this.props.event.date} {this.props.event.name}
            </EventInfo>
        </>)
    }
}

export default Event