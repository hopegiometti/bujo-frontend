import React from 'react'
//components
import Habit from './Habit'
import StreakComp from './StreakComp'
//redux
import { connect } from 'react-redux'
import { addHabit } from '../redux/actions'
//styling
import styled from 'styled-components';

class HabitTracker extends React.Component {
    state={
        habitForm: false,
        habitName: ''
    }

    renderHabits = () => {

        let habits = []
        if (this.props.habits) {

            this.props.habits.forEach((habit) => {
                if (habit.streaks) {
                    let habitStreaks = habit.streaks.map(streak => streak)
                    let streaksForHabit = []

                    for (let i=0; i<habitStreaks.length; i++) {
                        let streaks = this.props.streaks.filter(streak => streak[0] === habitStreaks[i])
                        streaksForHabit.push(streaks)
                    }

                    habits.push(<Habit key={habit.id} habit={habit} streaks={streaksForHabit[0]}/>)
                } 
            })
        }
        
        return habits
    }

    showNewHabitForm = () => {
        if (this.state.habitForm) {
            this.setState({
                habitForm: false
            })
        } else {
            this.setState({
                habitForm: true
            })
        }
    }

    handleHabitNameChange = (evt) => {
        this.setState({
            habitName: evt.target.value
        })
    }

    createNewHabit = (evt) => {
        evt.preventDefault()
        // fetch('http://localhost:3000/habits', {
        fetch('https://bujo-api.herokuapp.com/habits', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'accepts': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.habitName,
                page_id: this.props.page.id
            })
        })
        .then(r => r.json())
        .then((newHabit) => {
            this.props.addHabit(newHabit)
            this.setState({
                habitForm: false
            })
        })
    }
    
    render() {
        const AddButton = styled.button`
            color: white;
            font-size: 0.8em;
            border: 2px solid palevioletred;
            border-radius: 3px;
            background-color: palevioletred;
            margin-top: 10%;
        `;

        return(<div>
            {this.renderHabits()}
            {this.state.habitForm ? 
                (<div>
                    <form onSubmit={(evt) => this.createNewHabit(evt)}>
                            <input
                                onChange={this.handleHabitNameChange}
                                type="text"
                                name="name"
                                value={this.state.habitName}
                                placeholder="new habit"
                            />
                        <input type="submit" value="add habit"/>
                    </form>
                </div> ) : null }
            <AddButton onClick={this.showNewHabitForm}>add habit</AddButton>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        habits: state.habits,
        page: state.page,
        streaks: state.streaks
    }
}

export default connect(mapStateToProps, { addHabit })(HabitTracker)