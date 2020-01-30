import React from 'react'
//routing
import { Link } from 'react-router-dom'
//styling
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

class LoginContainer extends React.Component {
    render() {
        const StyledLogin = styled.div`
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
            height: 70vh;
        `;

        const StyledInput = styled.input`
            border: 1px solid #000;
            border-radius: 10px;
            padding: 10px;
            margin: 5px;
            width: 150px;
            box-sizing: border-box;
            justify-content: center;
            align-items: center;
        `;

        const Title = styled.h2`
            font-size: 1.5em;
            text-align: left;
            color: palevioletred;
        `;

        const LoginButton = styled.button`
            color: white;
            font-size: 0.8em;
            border: 2px solid palevioletred;
            border-radius: 3px;
            background-color: palevioletred;
            margin-top: 10%;
        `;

        const WelcomeDiv = styled.div`
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
            height: 70vh;
            border: 2px solid grey;
            border-radius: 10px;
            margin: 1%;
            width: 30%;
            padding: 1%;
            background-color: #e6e6e6;
        `;

        const AnotherDiv = styled.div`
            display: flex;
            justify-content: center;
            align-items: center;
            height: 90vh;
        `;

        return(<div>
            <>
            <AnotherDiv>
            <Container maxWidth="sm">
                <Paper elevation={3} style={{ padding: 0, margin: 0}}>
                    <StyledLogin>
                        <Title>Login:</Title>
                        <StyledInput correct={true} type="text" placeholder="email" />
                        <StyledInput correct={false} type="password" placeholder="password" />
                        <Link to="/users/hope"><LoginButton>Login</LoginButton></Link>
                    </StyledLogin>
                </Paper>
            </Container>
            </AnotherDiv>
            </>
        </div>)
    }
}

export default LoginContainer