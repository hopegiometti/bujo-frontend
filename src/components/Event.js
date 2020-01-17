import React from 'react'
//redux
import { connect } from 'react-redux'
//styling
import styled from 'styled-components';


class Event extends React.Component {
    
    renderTheEvents = () => {
        const EventInfo = styled.div`
            font-size: 1em;
            text-align: center;
            color: palevioletred;
            padding-bottom: 13.5px;
            padding-top: 13.5px;
        `;

        const DeleteButton = styled.button`
            color: palevioletred;
            font-size: 1em;
            border: 2px solid palevioletred;
            border-radius: 3px;
            width: 5%;
            height: 20%;
            font-size: 20%;
            text-align: center;
            float: right;
        `;

        if (this.props.page.layout.includes("Weekly Log")) {
            return(<>
                
                <EventInfo>
                 Event Reminder: {this.props.event.name}
                </EventInfo>
            </>) 
        } else {
            return(<>
                <EventInfo onClick={() => this.props.updateEvent(this.props.event, this.props.event.date)}>
                 {this.props.event.name}
                <DeleteButton onClick={()=> this.props.deleteEvent(this.props.event)}>
                    X
                </DeleteButton>
                </EventInfo>
            </>)
        }
    }


    render() {
        
        return(<>
            {this.renderTheEvents()}
        </>)
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.page
    }
}

export default connect(mapStateToProps)(Event)