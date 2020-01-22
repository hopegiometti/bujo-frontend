import React from 'react'
//styling
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

class PageForm extends React.Component {
    state={
        hideWeeklyOptions: true
    }

    renderWeeklyOptions = () => {
        if (this.props.pageLayout === "Weekly Log") {
            if (this.props.pageMonth === "January" || this.props.pageMonth === "March" || this.props.pageMonth === "May" || this.props.pageMonth === "July" || this.props.pageMonth === "August" || this.props.pageMonth === "October" || this.props.pageMonth === "December") {
            return(<div>
                <label>Pick a week:</label>
                <select value={this.props.weeklyLayoutWeek} onChange={this.props.handlePageFormWeekChange}>
                    <option selected disabled value="" >Select</option>
                    <option value="Week One">Week One</option>
                    <option value="Week Two">Week Two</option>
                    <option value="Week Three">Week Three</option>
                    <option value="Week Four">Week Four</option>
                    <option value="Week Five">Week Five</option>
                </select>
                </div>)
            } else {
                return(<div>
                    <label>Pick a week:</label>
                    <select value={this.props.weeklyLayoutWeek} onChange={this.props.handlePageFormWeekChange}>
                        <option selected disabled value="" >Select</option>
                        <option value="Week One">Week One</option>
                        <option value="Week Two">Week Two</option>
                        <option value="Week Three">Week Three</option>
                        <option value="Week Four">Week Four</option>
                    </select>
                    </div>) 
            }
        } 
    }

    renderNewListForm = () => {
        if (this.props.pageLayout === "List") {
            return(<div>
                <form>
                    <label>List Name:</label>
                    <input 
                    type="text"
                    name="name"
                    />
                </form>
            </div>)
        }
    }

    renderNewPageForm = () => {
        const DeleteButton = styled.button`
            color: palevioletred;
            font-size: 1em;
            border: 2px solid palevioletred;
            border-radius: 3px;
            float: right;
        `;

        return(<>
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
                            <option value="List">List</option>
                        </select>
                        {this.renderWeeklyOptions()}
                        {this.renderNewListForm()}
                    </div>
                    <input type="submit" value="Submit"/>
            </form>
        </>)
    }

    renderUpdatePageForm = () => {
        const DeleteButton = styled.button`
            color: palevioletred;
            font-size: 1em;
            border: 2px solid palevioletred;
            border-radius: 3px;
            float: right;
        `;

        return (<>
            Update Page:
            <DeleteButton onClick={this.props.togglePageForm}>
                X
            </DeleteButton>
            <form onSubmit={this.props.updatePageSubmit}>
                <label>Month:</label> {this.props.pageMonth}
                    <div>
                        <label>Layout:</label>
                        <select value={this.props.pageLayout} onChange={this.props.handlePageFormLayoutChange}>
                            <option disabled value="" >Select</option>
                            <option value="Monthly Log">Monthly Log</option>
                            <option value="Weekly Log">Weekly Log</option>
                            <option value="Habit Tracker">Habit Tracker</option>
                        </select>
                        {this.renderWeeklyOptions()}
                    </div>
                    <input type="submit" value="Submit"/>
            </form>
        </>)
    }

    render() {
        return(<div>
            <Container maxWidth="xs">
                <Paper elevation={3} style={{ padding: 0, margin: 0}}>           
                    {this.props.updateForm ? this.renderUpdatePageForm() : this.renderNewPageForm() }
                </Paper>
            </Container>
        </div>)
    }
}

export default PageForm