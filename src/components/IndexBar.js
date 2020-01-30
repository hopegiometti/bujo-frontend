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

    renderButton = () => {
    
        const AddButton = styled.button`
            color: white;
            font-size: 0.8em;
            border: 2px solid palevioletred;
            border-radius: 3px;
            background-color: palevioletred;
            margin-top: 10%;
        `;

        return <AddButton onClick={this.props.togglePageForm}>add page</AddButton>

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
                <span>
                    {this.renderButton()}
                </span>
            </MenuLI>
        </div>)
    }
}

export default IndexBar