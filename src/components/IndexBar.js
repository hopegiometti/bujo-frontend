import React from 'react'
//components
import IndexItem from './IndexItem'
//styling
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Collapsible from 'react-collapsible';

class IndexBar extends React.Component {
    state={
        hover: false
    }

    toggleHover = () => {
        if (this.state.hover) {
            this.setState({
                hover: false
            })
        } else {
            this.setState({
                hover: true
            })
        }
    }


    renderButton = () => {
        const AddButtonHover = styled.button`
            color: white;
            font-size: 1em;
            border: 2px solid palevioletred;
            border-radius: 3px;
            background-color: palevioletred;
            margin-bottom: 3%;
            margin-top: 3%;
        `;

        const AddButton = styled.button`
            color: palevioletred;
            font-size: 1em;
            border: 2px solid palevioletred;
            border-radius: 3px;
            margin-bottom: 3%;
            margin-top: 3%;
        `;


        if (this.state.hover) {
           return <AddButtonHover onClick={this.props.togglePageForm} variant="contained" color="primary">
                add page
            </AddButtonHover>
        } else {
           return <AddButton onClick={this.props.togglePageForm} variant="contained" color="primary">
                add page
            </AddButton>
        }
    }


    renderIndexItems = (month) => {
        let pagesForThatMonth = []

        this.props.pages.map((page) => {
            if (page.month === month) {
                pagesForThatMonth.push(<IndexItem key={page.id} page={page} handleNavClick={this.props.handleNavClick} deletePage={this.props.deletePage} />)
            } 
        })
        return pagesForThatMonth
    }

    render() {
        

        const MenuLI = styled.li`
            display: block;
            margin-right: 20px; 
            font-family: "Open Sans", sans-serif;
            font-size: 100%;
            color: grey;
            border: none;
        `;

        

        let pageMonths = this.props.pages.map(page => page.month)
        let uniqueMonths = [...new Set(pageMonths)]
        let allMonths = ['January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        let monthsInOrder = uniqueMonths.sort((a, b) => allMonths.indexOf(a) - allMonths.indexOf(b))

        return(<div>
            <MenuLI>
                {monthsInOrder.map(month => 
                <>
                    <span className="icon">+</span>
                    <Collapsible trigger={month} transitionTime={100}>
                        {this.renderIndexItems(month)}
                    </Collapsible>
                </>)}
                {/* {this.props.pages.map(page => <IndexItem key={page.id} page={page} handleNavClick={this.props.handleNavClick} deletePage={this.props.deletePage}/>)} */}
                <span onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                    {this.renderButton()}
                </span>
            </MenuLI>
        </div>)
    }
}

export default IndexBar