import React from 'react'
//components
import JournalContainer from './JournalContainer'
import IndexBar from './IndexBar'
import PageForm from './PageForm'
//redux
import { connect } from 'react-redux'
import { setUser } from '../redux/actions'
import { setJournal } from '../redux/actions'
import { setPages } from '../redux/actions'
import { setEvents } from '../redux/actions'
import { setPage } from '../redux/actions'
import { addPage } from '../redux/actions'
import { deletePage } from '../redux/actions'
//styling
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { borders } from '@material-ui/system';
import { flexbox } from '@material-ui/system';
import Paper from '@material-ui/core/Paper';


class mainContainer extends React.Component {
    state={
        showPageForm: false,
        pageMonth: '',
        pageLayout: ''
    }

    //lifecycle
    componentDidMount() {
        fetch("http://localhost:3000/users/3")
        .then(r => r.json())
        .then((hope) => {
            this.props.setUser(hope)
        })

        fetch("http://localhost:3000/journals/3")
        .then(r => r.json())
        .then((journal) => {
            this.props.setJournal(journal)
        })

        fetch("http://localhost:3000/pages")
        .then(r => r.json())
        .then((pages) => {
            this.props.setPages(pages)
        })
    }
    
    //other methods
    handleNavClick = (pageToNavTo) => {
        console.log(pageToNavTo)
        //fetch to grab the page and then call on these actions
        fetch(`http://localhost:3000/pages/${pageToNavTo.id}`)
        .then(r => r.json())
        .then((page) => {
            this.props.setPage(page)
            this.props.setEvents(page.events)
        })
    }

    togglePageForm = () => {
        // console.log("let's add a page!")
        if (this.state.showPageForm === false) {
            this.setState({
                showPageForm: true
            })
        } else {
            this.setState({
                showPageForm: false
            })
        }
    }

    //page form
    handlePageFormMonthChange = (evt) => {
        // console.log(evt)
        this.setState({
            pageMonth: evt.target.value
        })
    }

    handlePageFormLayoutChange = (evt) => {
        // console.log(evt)
        this.setState({
            pageLayout: evt.target.value
        })
    }

    newPageSubmit = (evt) => {
        evt.preventDefault()
        fetch("http://localhost:3000/pages", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'accepts': 'application/json'
            },
            body: JSON.stringify({
                month: this.state.pageMonth,
                layout: this.state.pageLayout,
                journal_id: this.props.journal.id
            })
        })
        .then(r => r.json())
        .then((newPage) => {
            this.props.addPage(newPage)
            this.setState({
                showPageForm: false
            })
        })
    }

    //delete page
    deletePage = (pageToDelete) => {
        // console.log("clicked")
        fetch(`http://localhost:3000/pages/${pageToDelete.id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then((msg) => {
            this.props.deletePage(msg.data.id)
        })
    }
    

    render() {
        // console.log(this.props, this.state)
        const Title = styled.h1`
            font-size: 1.5em;
            text-align: left;
            color: palevioletred;
        `;

        const Journal = styled.div`
            width: 80%;
            height: 80%;
            padding: 10px;
            border: 5px solid gray;
            margin: auto;
            font-size: 30%;
        `
        const IndexStyle = styled.div`
            width: 20%;
            float: left;
        `
        const MenuToggle = styled.input`
            display: none;
        `;

        const NavbarHeader = styled.div`
            position: relative;
            top: 0;
            left: 0;
            padding-top: 60px;
            width: 100%;
            overflow-y: scroll;
            text-align: center;
            -webkit-transition: opacity 300ms ease-in, visibility 0s ease-in 300ms;
            transition: opacity 300ms ease-in, visibility 0s ease-in 300ms;
        `;

        // console.log(this.props)
        return(
            <div>
                <Title>{this.props.hello} {this.props.user.name}</Title>
                <IndexStyle>
                    <MenuToggle />
                    <NavbarHeader>
                        <Container maxWidth="xs">
                            <Paper elevation={3} style={{ padding: 0, margin: 0}}>
                                <IndexBar pages={this.props.pages} handleNavClick={this.handleNavClick} togglePageForm={this.togglePageForm} deletePage={this.deletePage}/>
                            </Paper>
                        </Container>
                    </NavbarHeader>
                </IndexStyle>
                    {this.state.showPageForm ? <PageForm togglePageForm={this.togglePageForm} newPageSubmit={this.newPageSubmit} handlePageFormMonthChange={this.handlePageFormMonthChange} handlePageFormLayoutChange={this.handlePageFormLayoutChange} pageMonth={this.state.pageMonth} pageLayout={this.state.pageLayout}/> : <JournalContainer journal={this.props.journal} page={this.props.page} events={this.props.events} />}
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
        pages: state.pages,
        page: state.page,
        events: state.events
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setUser: (user) => { dispatch({type: "SET_USER", payload: user}) }
//     }
// }

export default connect(mapStateToProps, { setUser, setJournal, setPages, setPage, setEvents, addPage, deletePage })(mainContainer)