import React from 'react'
//components
import IndexItem from './IndexItem'
//styling
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

class IndexBar extends React.Component {
    renderIndexItems = (month) => {
        let pagesForThatMonth = []

        this.props.pages.map((page) => {
            if (page.month === month) {
                pagesForThatMonth.push(<IndexItem key={page.id} page={page} handleNavClick={this.props.handleNavClick} deletePage={this.props.deletePage}/>)
                console.log("hi", page)
                // return <IndexItem key={page.id} page={page} handleNavClick={this.props.handleNavClick} deletePage={this.props.deletePage}/>
                // return <IndexItem key={page.id} page={page} handleNavClick={this.props.handleNavClick} deletePage={this.props.deletePage}/>
            } 
        })
        console.log(pagesForThatMonth)

        // pagesForThatMonth.forEach((page) => {
        //     return <IndexItem key={page.id} page={page} handleNavClick={this.props.handleNavClick} deletePage={this.props.deletePage}/>
        // })
        return pagesForThatMonth
    }

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

        const MenuLI = styled.li`
            display: block;
            margin-right: 20px; 
            font-family: "Open Sans", sans-serif;
            font-size: 100%;
            color: #333;
            border: none;
        `;

        let pageMonths = this.props.pages.map(page => page.month)
        

        return(<div>
            <MenuLI>
                {pageMonths.map(month => 
                <>
                    <div key={month}>
                        {month}
                        {this.renderIndexItems(month)}
                        {/* <div>{this.renderIndexItems(month)}</div> */}
                    </div>
                </>)}
                {/* {this.props.pages.map(page => <IndexItem key={page.id} page={page} handleNavClick={this.props.handleNavClick} deletePage={this.props.deletePage}/>)} */}
                <Button onClick={this.props.togglePageForm} variant="contained" color="primary">
                    +
                </Button>
            </MenuLI>
        </div>)
    }
}

export default IndexBar