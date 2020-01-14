import React from 'react'
//components
import DayComponent from './DayComponent'
//styling
import styled from 'styled-components';
import GridList from '@material-ui/core/GridList';

class Week extends React.Component {
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
        const BorderedDay = styled.div`
            border-bottom: 1px dashed lightgrey;
            text-align: left;
        `;


        return(<div>
            hi from week!
            <GridList cellHeight={300}>
                <ColumnOne>
                    <BorderedDay>
                        <DayComponent name="Monday"/>
                    </BorderedDay>
                    <BorderedDay>
                        <DayComponent name="Tuesday"/>
                    </BorderedDay>
                    <BorderedDay>
                        <DayComponent name="Wednesday"/>
                        <div></div>
                    </BorderedDay>
                </ColumnOne>
                <ColumnTwo>
                    <BorderedDay>
                        <DayComponent name="Thursday"/>
                    </BorderedDay>
                    <BorderedDay>
                        <DayComponent name="Friday"/>
                    </BorderedDay>
                    <BorderedDay>
                        <DayComponent name="Saturday/Sunday"/>
                    </BorderedDay>
                </ColumnTwo>
            </GridList>
        </div>)
    }
}

export default Week