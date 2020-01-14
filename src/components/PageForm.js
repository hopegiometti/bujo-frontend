import React from 'react'
//styling
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

class PageForm extends React.Component {
    render() {
        const DeleteButton = styled.button`
            color: palevioletred;
            font-size: 1em;
            border: 2px solid palevioletred;
            border-radius: 3px;
            float: right;
        `;

        return(<div>
            <Container maxWidth="xs">
            <Paper elevation={3} style={{ padding: 0, margin: 0}}>
            New Page:
            <DeleteButton onClick={this.props.togglePageForm}>
                X
            </DeleteButton>
            <form onSubmit={this.props.newPageSubmit}>
                <label>Month:</label>
                    <select value={this.props.pageMonth} onChange={this.props.handlePageFormMonthChange}>
                        <option disabled value="" >Select</option>    
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                    <div>
                        <label>Layout:</label>
                        <select value={this.props.pageLayout} onChange={this.props.handlePageFormLayoutChange}>
                            <option disabled value="" >Select</option>
                            <option value="Monthly Log">Monthly Log</option>
                            <option value="Weekly Log">Weekly Log</option>
                            <option value="Habit Tracker">Habit Tracker</option>
                        </select>
                    </div>
                    <input type="submit" value="Submit"/>
            </form>
            </Paper>
            </Container>
        </div>)
    }
}

export default PageForm