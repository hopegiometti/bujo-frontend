import React from 'react'
//components
import IndexItem from './IndexItem'
//styling
import styled from 'styled-components';

class IndexBar extends React.Component {
    render() {
        const AddButton = styled.button`
            color: palevioletred;
            font-size: 1em;
            border: 2px solid palevioletred;
            border-radius: 3px;
            position: relative;
                bottom: -220px;
                right: -70px;
        `;

        return(<div>
            {this.props.pages.map(page => <IndexItem key={page.id} page={page} handleNavClick={this.props.handleNavClick}/>)}
            <AddButton onClick={this.props.togglePageForm}>
                +
            </AddButton>
        </div>)
    }
}

export default IndexBar