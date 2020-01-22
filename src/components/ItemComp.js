import React from 'react'
//redux
import { connect } from 'react-redux'
//styling
import styled from 'styled-components';

class ItemComp extends React.Component {
    render() {
        const ItemStyle = styled.li`
            color: grey;
            display: inline-block;
        `;

        const DescStyle = styled.p`
            color: grey;
        `;

        return(<div>
            <ItemStyle>{this.props.item.name} - {this.props.item.description}</ItemStyle>
        </div>)
    }
}

export default ItemComp