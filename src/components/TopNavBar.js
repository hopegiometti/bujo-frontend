import React from 'react'
import DropdownMenu from './DropdownMenu'
import { connect } from 'react-redux'
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { createGlobalStyle } from '../Styled';


class TopNavBar extends React.Component {

    render() {
        
        const Title = styled.div`
            font-size: 1.2em;
            float: left;
            color: palevioletred;
            border-right: 1px solid lightgrey;
            padding-right: 2%;
            padding-top: 0.5%;
            padding-bottom: 0.5%;
            padding-left: 2%;
        `;

        const Logout = styled.a`
            font-size: 1.2em;
            text-align: center;
            float: right;
            color: palevioletred;
            display: inline-block;
            padding-top: 0.5%;
            padding-bottom: 0.5%;
        `;

        const Settings = styled.a`
            font-size: 1.2em;
            text-align: center;
            float: left;
            color: palevioletred;
            display: inline-block;
            padding-top: 0.5%;
            padding-bottom: 0.5%;
            padding-left: 1%;
            border-right: 1px solid lightgrey;
            padding-right: 1%;
        `;

        const HomeStyle = styled.a`
            font-size: 1.2em;
            text-align: center;
            float: left;
            color: palevioletred;
            display: inline-block;
            padding-top: 0.5%;
            padding-bottom: 0.5%;
            padding-left: 1%;
            border-right: 1px solid lightgrey;
            padding-right: 1%;
        `;

        const NavbarHeader = styled.div`
            position: relative;
            top: 0;
            left: 0;
            width: 100%;
            border-bottom: 1px solid lightgrey;
            overflow-y: scroll;
            text-align: center;
            background-color: #ffffff;
            -webkit-transition: opacity 300ms ease-in, visibility 0s ease-in 300ms;
            transition: opacity 300ms ease-in, visibility 0s ease-in 300ms;
        `;
        
        const StyledLink = styled(Link)`
            color: grey;
        `;

        const Bujo = styled.div`
            font-size: 1.2em;
            text-align: center;
            float: left;
            color: palevioletred;
            display: inline-block;
            padding-top: 0.5%;
            padding-bottom: 0.5%;
            padding-left: 3%;
            border-right: 1px solid lightgrey;
            padding-right: 1%;
            font-weight: bold;
        `;
        

        return(<div>
               <div>
            {/* {this.props.user.name ?  */}
                {/* <> */}
                <NavbarHeader>
                <Container maxWidth="xl" borderBottom={1}>
                    <Paper elevation={3} style={{ padding: 0, margin: 0}}>
                        <Bujo>BUJO ✏ </Bujo>
                        <Title> Hello {this.props.user.name}!</Title>
                            <StyledLink to="/login">
                                <Logout onClick={this.props.handleLogout}>Logout</Logout>
                            </StyledLink>
                            <StyledLink to="/users/hope">
                                <HomeStyle>Home</HomeStyle>
                            </StyledLink>
                            <StyledLink to="/users/hope/settings">
                                <Settings>Settings</Settings>
                            </StyledLink>
                    </Paper>
                </Container>
                </NavbarHeader>
                
                {/* </> */}
                {/* : */}
                {/* <> */}
                    {/* <DropdownMenu users={this.props.users} handleUserChange={this.props.handleUserChange} chooseUser={this.props.chooseUser}/> */}
                {/* </>  */}
                
            {/* } */}
            </div>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(TopNavBar)

{/* <form onSubmit={this.props.chooseUser}>
    <label>User:</label>
        <select value={this.props.chosenUser} onChange={this.props.handleUserChange}>
            <option disabled value="" >Select</option>
            {this.props.users.map((user) => {
                return <option value={user.id}>{user.name}</option>
            })}
        </select>
    <input type="submit" value="Submit"/>
</form> */}