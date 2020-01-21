import React from 'react'
import 'react-dropdown/style.css'
import styled from 'styled-components';

export default class DropdownMenu extends React.Component {
    render() {
        const DropdownStyle = styled.select`
            width: 25%;
            height:35px;
            background: white;
            color: gray;
            padding-left: 5px;
            font-size: 14px;
            border:none;
            margin-left: 10px;
            text-align: left;
        `;

        return(<div>
            <form onSubmit={this.props.chooseUser}>
                <label>User:</label>
                <DropdownStyle value={this.props.chosenUser} onChange={this.props.handleUserChange}>
                        <option value="" selected disabled>Select</option>
                        {this.props.users.map((user) => {
                            return <option value={user.id}>{user.name}</option>
                        })}
                    </DropdownStyle>
                <input type="submit" value="Submit"/>
            </form>
        </div>)   
    }
}