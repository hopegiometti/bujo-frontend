import React from 'react'

class MonthlyLogLayout extends React.Component {

    componentDidMount() {
        // fetch("http://localhost:3000/events")
        fetch("https://bujo-api.herokuapp.com/events")
        .then(r => r.json())
        .then((events) => {
            this.props.setEvents(events)
        })
    }

    render() {
        return(<div>
            im a monthly log!
        </div>)
    }
}

export default MonthlyLogLayout