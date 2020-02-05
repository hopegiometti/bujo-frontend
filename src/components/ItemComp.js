import React from 'react'
//redux
import { connect } from 'react-redux'
import { deleteItem } from '../redux/actions'
//styling
import styled from 'styled-components';

class ItemComp extends React.Component {
    state={
        showDeleteButton: false
    }

    toggleDeleteButton = () => {
        if (this.state.showDeleteButton) {
            this.setState({
                showDeleteButton: false
            })
        } else {
            this.setState({
                showDeleteButton: true
            })
        }
    }

    deleteTheItem = (evt) => {
        // fetch(`http://localhost:3000/items/${this.props.item.id}`, {
        fetch(`https://bujo-api.herokuapp.com/items/${this.props.item.id}`, {
            method: 'DELETE'
        })
        .then(r => r.json())
        .then((msg) => {
           this.props.deleteItem(msg.data.id) 
        })
    }

    render() {
        const ItemStyle = styled.li`
            color: grey;
            display: inline-block;
        `;

        const DeleteButton = styled.button`
            color: palevioletred;
            font-size: 0.5em;
            border: 2px solid palevioletred;
            border-radius: 25%;
            text-align: center;
            color: white;
            background-color: palevioletred;
            margin-left: 5%;
        `;

        return(<><div onMouseEnter={this.toggleDeleteButton} onMouseLeave={this.toggleDeleteButton}>
            <ItemStyle>{this.props.item.name} - {this.props.item.description}</ItemStyle>
            {this.state.showDeleteButton ? 
                    <>
                    <DeleteButton onClick={this.deleteTheItem}>X</DeleteButton>
                    </>
                    :
                    null
                }
        </div></>)
    }
}

export default connect(null, {  deleteItem })(ItemComp)