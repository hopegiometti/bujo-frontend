import React from 'react'
import styled from 'styled-components';

class IndexItem extends React.Component {
    render() {
        const DeleteButton = styled.button`
            color: palevioletred;
            font-size: 1em;
            border: 2px solid palevioletred;
            border-radius: 3px;
        `;

        return(<div>
            <div onClick={() => this.props.handleNavClick(this.props.page)}>
                {this.props.page.month} - {this.props.page.layout}
            </div>
            <DeleteButton onClick={() => this.props.deletePage(this.props.page)}> 
                X
            </DeleteButton>
        </div>)
    }
}

export default IndexItem