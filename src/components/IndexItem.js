import React from 'react'
import styled from 'styled-components';

class IndexItem extends React.Component {
    render() {
        console.log("hi from index item")
        const DeleteButton = styled.button`
            color: palevioletred;
            font-size: 1em;
            border: 2px solid palevioletred;
            border-radius: 3px;
        `;

        const MenuUL = styled.ul`
            list-style: none;
        `;

        return(<div>
            <MenuUL>
                <a onClick={() => this.props.handleNavClick(this.props.page)}>
                    {this.props.page.layout}
                </a>
                <DeleteButton onClick={() => this.props.deletePage(this.props.page)}> 
                    X
                </DeleteButton>
            </MenuUL>
        </div>)
    }
}

export default IndexItem