import React from 'react'
import styled from 'styled-components';

class IndexItem extends React.Component {
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

    render() {
        
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

        const MenuUL = styled.ul`
            list-style: none;
        `;

        return(<div>
            <MenuUL>
                <div onMouseEnter={this.toggleDeleteButton} onMouseLeave={this.toggleDeleteButton}>
                <a onClick={() => this.props.handleNavClick(this.props.page)} >
                    {this.props.page.layout}
                </a>
                {this.state.showDeleteButton ? 
                    <>
                    <DeleteButton onClick={() => this.props.deletePage(this.props.page)}>X</DeleteButton>
                    </>
                    :
                    null
                }  
                </div>
                
                
                
            </MenuUL>
        </div>)
    }
}

export default IndexItem