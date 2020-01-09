import React from 'react'
import Page from './Page'

class JournalContainer extends React.Component {
    render() {
        console.log(this.props)
        return(<div>
            This is Your {this.props.journal.year} Journal!
            {this.props.pages.map(page => <Page page={page} key={page.id} />)}
        </div>)
    }
}

export default JournalContainer