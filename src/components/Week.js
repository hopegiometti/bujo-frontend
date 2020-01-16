import React from 'react'
//components
import DayComponent from './DayComponent'
//styling
import styled from 'styled-components';
import GridList from '@material-ui/core/GridList';
//redux
import { connect } from 'react-redux'

class Week extends React.Component {
    renderWeek = () => {
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

        if (this.props.page.month === "January") {
            if (this.props.page.layout.includes("Week Two")) {
                return(<>
                <GridList cellHeight={300}>
                    <ColumnOne>
                    <BorderedDay>
                        <DayComponent name="Wednesday" dayOfMonth={8} events={this.props.events}/>
                    </BorderedDay>
                    <BorderedDay>
                        <DayComponent name="Thursday" dayOfMonth={9} events={this.props.events}/>
                    </BorderedDay>
                    <BorderedDay>
                        <DayComponent name="Friday" dayOfMonth={10} events={this.props.events}/>
                    </BorderedDay>
                    <BorderedDay>
                        <DayComponent name="Saturday" dayOfMonth={11} events={this.props.events}/>
                    </BorderedDay>
                    </ColumnOne>
                    <ColumnTwo>
                        <BorderedDay>
                            <DayComponent name="Sunday" dayOfMonth={12} events={this.props.events}/>
                        </BorderedDay>
                        <BorderedDay>
                            <DayComponent name="Monday" dayOfMonth={13} events={this.props.events}/>
                        </BorderedDay>
                        <BorderedDay>
                            <DayComponent name="Tuesday" dayOfMonth={14} events={this.props.events}/>
                        </BorderedDay>
                    </ColumnTwo>
                </GridList>
                </>)
            } 
        }
    }

    render() {
        // const ColumnOne = styled.div`
        //     display: flex;
        //     justify-content: space-evenly;
        //     flex-direction: column;
        //     border-right: 1px solid lightgrey;
        // `

        // const ColumnTwo = styled.div`
        //     display: flex;
        //     justify-content: space-evenly;
        //     flex-direction: column
        //     float: left;
        // `
        // const BorderedDay = styled.div`
        //     border-bottom: 1px dashed lightgrey;
        //     text-align: left;
        // `;
        
        console.log(this.props)
        return(<div>
            hi from week!
            {/* <GridList cellHeight={300}> */}
                {/* <ColumnOne>
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
                </ColumnTwo> */}
                {this.renderWeek()}
            {/* </GridList> */}
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