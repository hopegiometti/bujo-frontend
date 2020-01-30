import React from 'react'
//components
import ItemComp from './ItemComp'
//redux
import { connect } from 'react-redux'
import { addItem } from '../redux/actions'
//styling
import styled from 'styled-components';

class List extends React.Component {
    state={
        newItemName: '',
        newItemDesc: '',
        itemForm: false
    }

    createNewItem = (evt) => {
        evt.preventDefault()
        fetch("http://localhost:3000/items", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'accepts': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.newItemName,
                description: this.state.newItemDesc,
                page_id: this.props.page.id
            })
        })
        .then(r => r.json())
        .then((newItem) => {
            this.props.addItem(newItem)
            this.setState({
                itemForm: false
            })
        })
    }

    handleItemNameChange = (evt) => {
        this.setState({
            newItemName: evt.target.value
        })
    }
    
    handleItemDescChange = (evt) => {
        this.setState({
            newItemDesc: evt.target.value
        })
    }

    showNewItemForm = () => {
        if (this.state.itemForm) {
            this.setState({
                itemForm: false
            })
        } else {
            this.setState({
                itemForm: true
            })
        }
    }

    renderListItems = () => {
        let items = []

        this.props.items.forEach((item) => {
            items.push(<ItemComp key={item.id} item={item}/>)
        })

        return items
    }

    render() {
        const ListHeading = styled.h3`
            color: palevioletred;
        `;

        const AddButton = styled.button`
            color: white;
            font-size: 0.8em;
            border: 2px solid palevioletred;
            border-radius: 3px;
            background-color: palevioletred;
            margin-top: 10%;
        `;

        return(<div>
            <ListHeading>{this.props.page.layout} - {this.props.page.month}</ListHeading>
            <ul>{this.renderListItems()}</ul>
            <p>    </p>
            {this.state.itemForm ? 
                (<div>
                    <form onSubmit={(evt) => this.createNewItem(evt)}>
                            <input
                                onChange={this.handleItemNameChange}
                                type="text"
                                name="name"
                                value={this.state.newItemName}
                                placeholder="new item"
                            />
                            <input
                                onChange={this.handleItemDescChange}
                                type="text"
                                name="name"
                                value={this.state.newItemDesc}
                                placeholder="description"
                            />
                        <input type="submit" value="add item"/>
                    </form>
                </div> ) : null }
            <AddButton onClick={this.showNewItemForm}>add item</AddButton>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        page: state.page
    }
}

export default connect(mapStateToProps, { addItem })(List)