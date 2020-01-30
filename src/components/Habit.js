import React from 'react'
//components
import StreakComp from './StreakComp'
//redux
import { connect } from 'react-redux'
//styling
import styled from 'styled-components';

class Habit extends React.Component {

    renderHabitsRowOne = () => {
        let streaksRowOne = []
        if (this.props.streaks) {
            if (this.props.streaks[0]) {
                let streakDates = this.props.streaks[0].map(streak => streak.date)
                
                for (let i=1; i<=15; i++) {
                    if (streakDates.includes(i)) {
                        streaksRowOne.push(<StreakComp key={i} date={i} habit={this.props.habit} streak={i}/>)
                    } else {
                        streaksRowOne.push(<StreakComp key={i} date={i} habit={this.props.habit} />)
                    }
                }
            }
        } else {
            for (let i=1; i<=15; i++) {
                streaksRowOne.push(<StreakComp key={i} date={i} habit={this.props.habit} />)
            }
        }
        return streaksRowOne
    }

    renderHabitsRowTwo = () => {
        let streaksRowTwo = []
        if (this.props.streaks) {
            if (this.props.streaks[0]) {
                let streakDates = this.props.streaks[0].map(streak => streak.date)

                if (this.props.page.month.includes("January" || "March" || "May" || "July" || "August" || "October" || "December")) {
                    for (let i=16; i<=31; i++) {
                        if (streakDates.includes(i)) {
                            streaksRowTwo.push(<StreakComp key={i} date={i} habit={this.props.habit} streak={i}/>)
                        } else {
                            streaksRowTwo.push(<StreakComp key={i} date={i} habit={this.props.habit}/>)
                        }
                    }
                } else if (this.props.page.month === "February") {
                    for (let i=16; i<=29; i++) {
                        if (streakDates.includes(i)) {
                            streaksRowTwo.push(<StreakComp key={i} date={i} habit={this.props.habit} streak={i}/>)
                        } else {
                            streaksRowTwo.push(<StreakComp key={i} date={i} habit={this.props.habit} />)
                        }
                    }
                } else {
                    for (let i=16; i<=30; i++) {
                        if (streakDates.includes(i)) {
                            streaksRowTwo.push(<StreakComp key={i} date={i} streak={i}/>)
                        } else {
                            streaksRowTwo.push(<StreakComp key={i} date={i} />)
                        }
                    }
                }

            }
        } else {
            if (this.props.page.month.includes("September" || "April" || "June" || "November")) {
                for (let i=16; i<=30; i++) { 
                    streaksRowTwo.push(<StreakComp key={i} date={i} habit={this.props.habit}/>)
                }
            } else if (this.props.page.month === "February") {
                for (let i=16; i<=29; i++) { 
                    streaksRowTwo.push(<StreakComp key={i} date={i} habit={this.props.habit}/>)
                }
            } else {
                for (let i=16; i<=31; i++) { 
                    streaksRowTwo.push(<StreakComp key={i} date={i} habit={this.props.habit}/>)
                }
            }
        }
        return streaksRowTwo
    }

    render() {
        const HabitName = styled.h5`
        `;

        const HabitStyle = styled.div`
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-evenly;
        `;

        const spaceBetween = styled.div`
        `;

        
        return(<div>
            <HabitName>
                {this.props.habit.name}
            </HabitName>
            <HabitStyle>
                {this.renderHabitsRowOne()}
            </HabitStyle>
            <HabitStyle>
                {this.renderHabitsRowTwo()}
            </HabitStyle>
            <spaceBetween>     </spaceBetween>   
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        habits: state.habits,
        page: state.page
    }
}

export default connect(mapStateToProps)(Habit)