import React from 'react'
//redux
import { connect } from 'react-redux'
import { addEvent } from '../redux/actions'
//styling
import styled from 'styled-components';

class EventForm extends React.Component {

    render() {
        const Input = styled.input`
            padding: 0.5em;
            margin: 0.5em;
            color: palevioletred;
            background: white;
            border: none;
            border-radius: 3px;
        `;

        
        return(<div>
            { this.props.event ? 
            <>
                <form onSubmit={(evt) => this.props.handleUpdateSubmit(evt, this.props.date)}>
                            <Input
                                onChange={this.props.handleEventNameChange}
                                type="text"
                                name="name"
                                value={this.props.name}
                                placeholder={this.props.event.name}
                            />
                        <Input type="submit" value="edit"/>
                </form> 
            </>
            :
            <>
                <form onSubmit={(evt) => this.props.handleNewSubmit(evt, this.props.date)}>
                    <Input
                        onChange={this.props.handleEventNameChange}
                        type="text"
                        name="name"
                        value={this.props.name}
                        placeholder="new event"
                    />
                    <Input type="submit" value="add"/>
                </form>
            </>
            }
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.page,
    }
}

export default connect(mapStateToProps, { addEvent })(EventForm)