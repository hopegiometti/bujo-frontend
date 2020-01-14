import React from 'react'
//components
import Page from './Page'
//styling
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

class JournalContainer extends React.Component {
    
    render() {
        // console.log(this.props)
        return(<div>
            This is Your {this.props.journal.year} Journal!
                <Page togglePageForm={this.props.togglePageForm} page={this.props.page} events={this.props.events} handleNewSubmit={this.props.handleNewSubmit}/>
        </div>)
    }
}


export default JournalContainer

// { page.layout === "monthly_log" ? <MonthlyLogLayout page={page} key={page.id}/> : <Page page={page} key={page.id} />}