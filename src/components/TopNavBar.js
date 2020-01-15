import React from 'react'

class TopNavBar extends React.Component {

    render() {
        return(<div>
            hi im the nav bar!
            <form onSubmit={this.props.chooseUser}>
                <label>User:</label>
                    <select value={this.props.chosenUser} onChange={this.props.handleUserChange}>
                        <option disabled value="" >Select</option>
                        {this.props.users.map((user) => {
                            return <option value={user.id}>{user.name}</option>
                        })}
                    </select>
                <input type="submit" value="Submit"/>
            </form>
        </div>)
    }
}

export default TopNavBar