import React from 'react'
//redux
import { connect } from 'react-redux'
//styling
import styled from 'styled-components';
//redux
import { addStreak } from '../redux/actions'
import { getStreaks } from '../redux/actions'
import { getHabits } from '../redux/actions'

class Streak extends React.Component {

    renderStreaks = () =>{
        
        const StreakedDate = styled.p`
            color: grey;
            background-color: lightpink;
            border-radius: 25%;
            width: 175%;
        `;

        const UnstreakedDate = styled.p`
            color: grey;
        `;

        if (this.props.streak) {
            return <StreakedDate>{this.props.date}</StreakedDate>
        } else {
           return <UnstreakedDate>{this.props.date}</UnstreakedDate>
        }

    }

    handleClick = () => {
        fetch('http://localhost:3000/streaks', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'accepts': 'application/json'
            },
            body: JSON.stringify({
                date: this.props.date,
                habit_id: this.props.habit.id
            })
        })
        .then(r => r.json())
        .then((newStreak) => {
            fetch(`http://localhost:3000/pages/${this.props.page.id}`)
            .then(r => r.json())
            .then((page) => {
                this.props.getHabits(page.habits)
                page.habits.forEach((habit) => {
                   this.props.getStreaks(habit.streaks)
               }) 
            })
        })
    }

    render() {
        
        return(<>
        <div onClick={this.handleClick}>
            {this.renderStreaks()}
        </div>
        </>)
    }
}

const mapStateToProps = (state) =>{
    return {
        habits: state.habits,
        page: state.page
    }
}

export default connect(mapStateToProps, { addStreak, getStreaks, getHabits })(Streak)