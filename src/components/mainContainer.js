import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';
import JournalContainer from './JournalContainer'
import { setUser } from '../redux/actions'
import { setJournal } from '../redux/actions'
import { setPages } from '../redux/actions'



class mainContainer extends React.Component {

    componentDidMount() {
        fetch(fetch("http://localhost:3000/users/1")
        .then(r => r.json())
        .then((hope) => {
            this.props.setUser(hope)
        }))

        fetch(fetch("http://localhost:3000/journals/1")
        .then(r => r.json())
        .then((journal) => {
            this.props.setJournal(journal)
        }))

        fetch(fetch("http://localhost:3000/pages")
        .then(r => r.json())
        .then((pages) => {
            this.props.setPages(pages)
        }))
    }
    

    render() {

        const Title = styled.h1`
            font-size: 1.5em;
            text-align: center;
            color: palevioletred;
        `;

        const Journal = styled.div`
            width: 600px;
            height: 600px;
            padding: 10px;
            border: 5px solid gray;
            margin: auto;
        `


        // console.log(this.props)
        return(
            <div>
                <Title>{this.props.hello} {this.props.user.name}</Title>
                <Journal>
                    <JournalContainer journal={this.props.journal} pages={this.props.pages} />
                </Journal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        hello: state.hello,
        user: state.user,
        journal: state.journal,
        pages: state.pages
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setUser: (user) => { dispatch({type: "SET_USER", payload: user}) }
//     }
// }

export default connect(mapStateToProps, { setUser, setJournal, setPages })(mainContainer)