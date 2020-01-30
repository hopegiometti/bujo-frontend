import React from 'react'
//components
import TopNavBar from './TopNavBar'
//redux
import { connect } from 'react-redux'
import { setUser } from '../redux/actions'
//styling
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { StyledInput } from '../Styled'
import { SubmitInput } from '../Styled'

class SettingsComp extends React.Component {
    state={
        name: ''
    }

    handleUserNameChange = (evt) => {
        console.log(evt.target.value)
        this.setState({
            name: evt.target.value
        })
    }

    updateUserSubmit = (evt) => {
        evt.preventDefault()
        this.setState({
            name: evt.target.value
        })
    }

    render() {
        const Title = styled.h1`
            font-size: 1.5em;
            text-align: center;
            color: palevioletred;
            padding-top: 3%;
            padding-bottom: 5%;
        `;

        const AnotherDiv = styled.div`
            display: flex;
            justify-content: center;
            align-items: center;
            height: 60vh;
        `;
        
        const TitleTwo = styled.h3`
            font-size: 1.5em;
            text-align: left;
            color: grey;
            padding-bottom: 15%;
            padding-left: 3%;
        `;

        console.log(this.props.user)
        return(<div>
                <TopNavBar />
                <AnotherDiv>
                    <Container maxWidth="sm">
                        <Paper elevation={3} style={{ padding: 0, margin: 0}}>
                            <Title>Settings:</Title>
                            <TitleTwo>User: {this.props.user.name}</TitleTwo>
                        </Paper>
                    </Container>
            </AnotherDiv>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(SettingsComp)
