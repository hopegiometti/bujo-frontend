import React from 'react'

class IndexItem extends React.Component {
    render() {

        return(<div>
            <div onClick={() => this.props.handleNavClick(this.props.page)}>
                {this.props.page.month} - {this.props.page.layout}
            </div>
        </div>)
    }
}

export default IndexItem