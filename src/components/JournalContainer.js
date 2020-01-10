import React from 'react'
//components
import Page from './Page'

class JournalContainer extends React.Component {
    
    render() {
        // console.log(this.props)
        return(<div>
            This is Your {this.props.journal.year} Journal!
            <Page page={this.props.page} events={this.props.events}/>
            {/* {this.props.pages.map(page => <Page page={page} key={page.id} />)} */}
        </div>)
    }
}


export default JournalContainer

// { page.layout === "monthly_log" ? <MonthlyLogLayout page={page} key={page.id}/> : <Page page={page} key={page.id} />}