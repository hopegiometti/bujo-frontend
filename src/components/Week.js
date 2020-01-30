import React from 'react'
//components
import DayComponent from './DayComponent'
//styling
import styled from 'styled-components';
import GridList from '@material-ui/core/GridList';
//redux
import { connect } from 'react-redux'

class Week extends React.Component {

    renderWeekColumnOne = () => {
        const BorderedDay = styled.div`
            border-bottom: 1px dashed lightgrey;
            text-align: left;
        `;

        let weekDaysColumnOne = []

        if (this.props.page.month === "January" || this.props.page.month === "July") {
            let janDays = {
                1: "Wednesday",
                2: "Thursday",
                3: "Friday",
                4: "Saturday",
                5: "Sunday",
                6: "Monday",
                7: "Tuesday"
              }
            if (this.props.page.layout.includes("Week One")) {
                for (let i = 1; i <= 4; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={janDays[i]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Two")) {
                for (let i = 8; i <= 11; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={janDays[i-7]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Three")) {
                for (let i = 15; i <= 18; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={janDays[i-14]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Four")) {
                for (let i = 22; i <= 25; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={janDays[i-21]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else {
                for (let i = 29; i <= 31; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={janDays[i-28]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            }
        } else if (this.props.page.month === "February") {
            let febDays = {
                1: "Saturday",
                2: "Sunday",
                3: "Monday",
                4: "Tuesday",
                5: "Wednesday",
                6: "Thursday",
                7: "Friday"
            }
            if (this.props.page.layout.includes("Week One")) {
                for (let i = 1; i <= 4; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={febDays[i]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Two")) {
                for (let i = 8; i <= 11; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={febDays[i-7]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Three")) {
                for (let i = 15; i <= 18; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={febDays[i-14]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Four")) {
                for (let i = 22; i <= 25; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={febDays[i-21]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            }

        } else if (this.props.page.month === "March") {
            let marchDays = {
                1: "Sunday",
                2: "Monday",
                3: "Tuesday",
                4: "Wednesday",
                5: "Thursday",
                6: "Friday",
                7: "Saturday"
            }
            if (this.props.page.layout.includes("Week One")) {
                for (let i = 1; i <= 4; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={marchDays[i]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Two")) {
                for (let i = 8; i <= 11; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={marchDays[i-7]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Three")) {
                for (let i = 15; i <= 18; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={marchDays[i-14]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Four")) {
                for (let i = 22; i <= 25; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={marchDays[i-21]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else {
                for (let i = 29; i <= 31; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={marchDays[i-28]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            }
        } else if (this.props.page.month === "April") {
            let aprilDays = {
                1: "Wednesday",
                2: "Thursday",
                3: "Friday",
                4: "Saturday",
                5: "Sunday",
                6: "Monday",
                7: "Tuesday"
            }
            if (this.props.page.layout.includes("Week One")) {
                for (let i = 1; i <= 4; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={aprilDays[i]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Two")) {
                for (let i = 8; i <= 11; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={aprilDays[i-7]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Three")) {
                for (let i = 15; i <= 18; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={aprilDays[i-14]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Four")) {
                for (let i = 22; i <= 26; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={aprilDays[i-21]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            }
        } else if (this.props.page.month === "May") {
            let mayDays = {
                1: "Friday",
                2: "Saturday",
                3: "Sunday",
                4: "Monday",
                5: "Tuesday",
                6: "Wednesday",
                7: "Thursday"
            }
            if (this.props.page.layout.includes("Week One")) {
                for (let i = 1; i <= 4; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={mayDays[i]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Two")) {
                for (let i = 8; i <= 11; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={mayDays[i-7]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Three")) {
                for (let i = 15; i <= 18; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={mayDays[i-14]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Four")) {
                for (let i = 22; i <= 25; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={mayDays[i-21]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else {
                for (let i = 29; i <= 31; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={mayDays[i-28]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } 
        } else if (this.props.page.month === "June") {
            let juneDays = {
                1: "Monday",
                2: "Tuesday",
                3: "Wednesday",
                4: "Thursday",
                5: "Friday",
                6: "Saturday",
                7: "Sunday"
            }
            if (this.props.page.layout.includes("Week One")) {
                for (let i = 1; i <= 4; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={juneDays[i]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Two")) {
                for (let i = 8; i <= 11; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={juneDays[i-7]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Three")) {
                for (let i = 15; i <= 18; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={juneDays[i-14]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Four")) {
                for (let i = 22; i <= 26; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={juneDays[i-21]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            }
        } else if (this.props.page.month === "August") {
            let augDays = {
                1: "Saturday",
                2: "Sunday",
                3: "Monday",
                4: "Tuesday",
                5: "Wednesday",
                6: "Thursday",
                7: "Friday"
            }
            if (this.props.page.layout.includes("Week One")) {
                for (let i = 1; i <= 4; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={augDays[i]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Two")) {
                for (let i = 8; i <= 11; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={augDays[i-7]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Three")) {
                for (let i = 15; i <= 18; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={augDays[i-14]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Four")) {
                for (let i = 22; i <= 25; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={augDays[i-21]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else {
                for (let i= 29; i<=31; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={augDays[i-28]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            }
        } else if (this.props.page.month === "September") {
            let sepDays = {
                1: "Tuesday",
                2: "Wednesday",
                3: "Thursday",
                4: "Friday",
                5: "Saturday",
                6: "Sunday",
                7: "Monday"
            }
            if (this.props.page.layout.includes("Week One")) {
                for (let i = 1; i <= 4; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={sepDays[i]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Two")) {
                for (let i = 8; i <= 11; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={sepDays[i-7]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Three")) {
                for (let i = 15; i <= 18; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={sepDays[i-14]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Four")) {
                for (let i = 22; i <= 26; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={sepDays[i-21]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            }
        }  else if (this.props.page.month === "October") {
            let octDays = {
                1: "Thursday",
                2: "Friday",
                3: "Saturday",
                4: "Sunday",
                5: "Monday",
                6: "Tuesday",
                7: "Wednesday"
            }
            if (this.props.page.layout.includes("Week One")) {
                for (let i = 1; i <= 4; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={octDays[i]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Two")) {
                for (let i = 8; i <= 11; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={octDays[i-7]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Three")) {
                for (let i = 15; i <= 18; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={octDays[i-14]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Four")) {
                for (let i = 22; i <= 25; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={octDays[i-21]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else {
                for (let i= 29; i<=31; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={octDays[i-28]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            }
        } else if (this.props.page.month === "November") {
            let novDays = {
                1: "Sunday",
                2: "Monday",
                3: "Tuesday",
                4: "Wednesday",
                5: "Thursday",
                6: "Friday",
                7: "Saturday"
            }
            if (this.props.page.layout.includes("Week One")) {
                for (let i = 1; i <= 4; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={novDays[i]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Two")) {
                for (let i = 8; i <= 11; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={novDays[i-7]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Three")) {
                for (let i = 15; i <= 18; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={novDays[i-14]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Four")) {
                for (let i = 22; i <= 26; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={novDays[i-21]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            }
        } else if (this.props.page.month === "December") {
            let decDays = {
                1: "Tuesday",
                2: "Wednesday",
                3: "Thursday",
                4: "Friday",
                5: "Saturday",
                6: "Sunday",
                7: "Monday"
            }
            if (this.props.page.layout.includes("Week One")) {
                for (let i = 1; i <= 4; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={decDays[i]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Two")) {
                for (let i = 8; i <= 11; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={decDays[i-7]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Three")) {
                for (let i = 15; i <= 18; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={decDays[i-14]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Four")) {
                for (let i = 22; i <= 25; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={decDays[i-21]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else {
                for (let i=29; i<=31; i++) {
                    weekDaysColumnOne.push(<BorderedDay><DayComponent name={decDays[i-28]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            }
        }
        return weekDaysColumnOne
    }



    //COLUMN TWO
    renderWeekColumnTwo = () => {
        const BorderedDay = styled.div`
            border-bottom: 1px dashed lightgrey;
            text-align: left;
        `;
        let weekDaysColumnTwo = []
        if (this.props.page.month === "January" || this.props.page.month === "July") {
            let janDays = {
                1: "Wednesday",
                2: "Thursday",
                3: "Friday",
                4: "Saturday",
                5: "Sunday",
                6: "Monday",
                7: "Tuesday"
              }
            if (this.props.page.layout.includes("Week One")) {
                for (let i = 5; i <= 7; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={janDays[i]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Two")) {
                for (let i = 12; i <= 14; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={janDays[i-7]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Three")) {
                for (let i = 19; i <= 21; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={janDays[i-14]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Four")) {
                for (let i = 26; i <= 28; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={janDays[i-21]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            }
        } else if (this.props.page.month === "February") {
            let febDays = {
                1: "Saturday",
                2: "Sunday",
                3: "Monday",
                4: "Tuesday",
                5: "Wednesday",
                6: "Thursday",
                7: "Friday"
            }
            if (this.props.page.layout.includes("Week One")) {
                for (let i = 5; i <= 7; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={febDays[i]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Two")) {
                for (let i = 12; i <= 14; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={febDays[i-7]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Three")) {
                for (let i = 19; i <= 21; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={febDays[i-14]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Four")) {
                for (let i = 26; i <= 29; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={febDays[i-21]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            }
        } else if (this.props.page.month === "March") {
            let marchDays = {
                1: "Sunday",
                2: "Monday",
                3: "Tuesday",
                4: "Wednesday",
                5: "Thursday",
                6: "Friday",
                7: "Saturday"
            }
            if (this.props.page.layout.includes("Week One")) {
                for (let i = 5; i <= 7; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={marchDays[i]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Two")) {
                for (let i = 12; i <= 14; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={marchDays[i-7]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Three")) {
                for (let i = 19; i <= 21; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={marchDays[i-14]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Four")) {
                for (let i = 26; i <= 28; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={marchDays[i-21]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            }
        } else if (this.props.page.month === "April") {
            let aprilDays = {
                1: "Wednesday",
                2: "Thursday",
                3: "Friday",
                4: "Saturday",
                5: "Sunday",
                6: "Monday",
                7: "Tuesday"
            }
            if (this.props.page.layout.includes("Week One")) {
                for (let i = 5; i <= 7; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={aprilDays[i]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Two")) {
                for (let i = 12; i <= 14; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={aprilDays[i-7]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Three")) {
                for (let i = 19; i <= 21; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={aprilDays[i-14]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Four")) {
                for (let i = 27; i <= 30; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={aprilDays[i-21]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            }
        } else if (this.props.page.month === "May") {
            let mayDays = {
                1: "Friday",
                2: "Saturday",
                3: "Sunday",
                4: "Monday",
                5: "Tuesday",
                6: "Wednesday",
                7: "Thursday"
            }
            if (this.props.page.layout.includes("Week One")) {
                for (let i = 5; i <= 7; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={mayDays[i]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Two")) {
                for (let i = 12; i <= 14; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={mayDays[i-7]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Three")) {
                for (let i = 19; i <= 21; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={mayDays[i-14]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Four")) {
                for (let i = 26; i <= 28; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={mayDays[i-21]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            }
        } else if (this.props.page.month === "June") {
            let juneDays = {
                1: "Monday",
                2: "Tuesday",
                3: "Wednesday",
                4: "Thursday",
                5: "Friday",
                6: "Saturday",
                7: "Sunday"
            }
            if (this.props.page.layout.includes("Week One")) {
                for (let i = 5; i <= 7; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={juneDays[i]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Two")) {
                for (let i = 12; i <= 14; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={juneDays[i-7]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Three")) {
                for (let i = 19; i <= 21; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={juneDays[i-14]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Four")) {
                for (let i = 27; i <= 30; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={juneDays[i-21]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            }
        } else if (this.props.page.month === "August") {
            let augDays = {
                1: "Saturday",
                2: "Sunday",
                3: "Monday",
                4: "Tuesday",
                5: "Wednesday",
                6: "Thursday",
                7: "Friday"
            }
            if (this.props.page.layout.includes("Week One")) {
                for (let i = 5; i <= 7; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={augDays[i]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Two")) {
                for (let i = 12; i <= 14; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={augDays[i-7]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Three")) {
                for (let i = 19; i <= 21; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={augDays[i-14]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Four")) {
                for (let i = 26; i <= 28; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={augDays[i-21]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            }
        } else if (this.props.page.month === "September") {
            let sepDays = {
                1: "Tuesday",
                2: "Wednesday",
                3: "Thursday",
                4: "Friday",
                5: "Saturday",
                6: "Sunday",
                7: "Monday"
            }
            if (this.props.page.layout.includes("Week One")) {
                for (let i = 5; i <= 7; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={sepDays[i]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Two")) {
                for (let i = 12; i <= 14; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={sepDays[i-7]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Three")) {
                for (let i = 19; i <= 21; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={sepDays[i-14]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Four")) {
                for (let i = 27; i <= 30; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={sepDays[i-21]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            }
        } else if (this.props.page.month === "October") {
            let octDays = {
                1: "Thursday",
                2: "Friday",
                3: "Saturday",
                4: "Sunday",
                5: "Monday",
                6: "Tuesday",
                7: "Wednesday"
            }
            if (this.props.page.layout.includes("Week One")) {
                for (let i = 5; i <= 7; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={octDays[i]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Two")) {
                for (let i = 12; i <= 14; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={octDays[i-7]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Three")) {
                for (let i = 19; i <= 21; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={octDays[i-14]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Four")) {
                for (let i = 26; i <= 28; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={octDays[i-21]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            }
        } else if (this.props.page.month === "November") {
            let novDays = {
                1: "Sunday",
                2: "Monday",
                3: "Tuesday",
                4: "Wednesday",
                5: "Thursday",
                6: "Friday",
                7: "Saturday"
            }
            if (this.props.page.layout.includes("Week One")) {
                for (let i = 5; i <= 7; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={novDays[i]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Two")) {
                for (let i = 12; i <= 14; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={novDays[i-7]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Three")) {
                for (let i = 19; i <= 21; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={novDays[i-14]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Four")) {
                for (let i = 27; i <= 30; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={novDays[i-21]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            }
        } else if (this.props.page.month === "December") {
            let decDays = {
                1: "Tuesday",
                2: "Wednesday",
                3: "Thursday",
                4: "Friday",
                5: "Saturday",
                6: "Sunday",
                7: "Monday"
            }
            if (this.props.page.layout.includes("Week One")) {
                for (let i = 5; i <= 7; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={decDays[i]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Two")) {
                for (let i = 12; i <= 14; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={decDays[i-7]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Three")) {
                for (let i = 19; i <= 21; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={decDays[i-14]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            } else if (this.props.page.layout.includes("Week Four")) {
                for (let i = 26; i <= 28; i++) {
                    weekDaysColumnTwo.push(<BorderedDay><DayComponent name={decDays[i-21]} dayOfMonth={i} events={this.props.events}/></BorderedDay>)
                }
            }
        }
        
        return weekDaysColumnTwo

    }


    render() {
        const ColumnOne = styled.div`
            display: flex;
            justify-content: space-evenly;
            flex-direction: column;
            border-right: 1px solid lightgrey;
        `

        const ColumnTwo = styled.div`
            display: flex;
            justify-content: space-evenly;
            flex-direction: column
            float: left;
        `
        
        return(<div>
            <GridList cellHeight='auto'>
                <ColumnOne>
                    {this.renderWeekColumnOne()}
                </ColumnOne>
                <ColumnTwo>
                    {this.renderWeekColumnTwo()}
                </ColumnTwo>
            </GridList>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.events
    }
}

export default connect(mapStateToProps)(Week)
// export default Week