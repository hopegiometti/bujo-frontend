import React from 'react'
//components
import JournalContainer from './JournalContainer'
import IndexBar from './IndexBar'
import PageForm from './PageForm'
import TopNavBar from './TopNavBar'
//redux
import { connect } from 'react-redux'
import { setUser } from '../redux/actions'
import { setJournal } from '../redux/actions'
import { setPages } from '../redux/actions'
import { setEvents } from '../redux/actions'
import { setPage } from '../redux/actions'
import { addPage } from '../redux/actions'
import { deletePage } from '../redux/actions'
import { updatePage } from '../redux/actions'
import { getUsers } from '../redux/actions'
import { getJournals } from '../redux/actions'
import { getUserPages } from '../redux/actions'
import { getTasks } from '../redux/actions'
import { getHabits } from '../redux/actions'
import { getStreaks } from '../redux/actions'
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
        pageLayout: '',
        updatePage: {},
        updateForm: false,
        userId: {},
        weeklyLayoutWeek: ''
    }

    //lifecycle
    componentDidMount() {
        fetch(`http://localhost:3000/users/14`)
        .then(r => r.json())
        .then((hope) => {
            this.props.setUser(hope)
        })

        fetch("http://localhost:3000/journals/13")
        .then(r => r.json())
        .then((journal) => {
            this.props.setJournal(journal)
        })

        fetch("http://localhost:3000/pages")
        .then(r => r.json())
        .then((pages) => {
            this.props.setPages(pages)
            let allUsersPages = this.props.pages.filter(page => page.journal_id === this.props.journal.id)
            this.props.getUserPages(allUsersPages)
        })

        fetch("http://localhost:3000/users")
        .then(r => r.json())
        .then((allUsers) => {
            this.props.getUsers(allUsers)
        })

        fetch("http://localhost:3000/journals")
        .then(r => r.json())
        .then((allJournals) => {
            this.props.getJournals(allJournals)
        })

        fetch("http://localhost:3000/habits")
        .then(r => r.json())
        .then((allHabits) => {
            this.props.getHabits(allHabits)
            allHabits.forEach(habit => {
                this.props.getStreaks(habit.streaks)
            })
        })

        fetch("http://localhost:3000/items")
        .then(r => r.json())
        .then((allItems) => {
            
        })
    }
    
    //other methods
    handleNavClick = (pageToNavTo) => {
        if (pageToNavTo.layout.includes("Weekly Log") && this.props.page.month === pageToNavTo.month) {
            fetch(`http://localhost:3000/pages/${pageToNavTo.id}`)
            .then(r => r.json())
            .then((page) => {
                this.props.setPage(page)
                this.props.getTasks(page.tasks)
            })
        } else if (pageToNavTo.layout.includes("Weekly Log")) {
           let pagesForTheSameMonth = this.props.userPages.filter(page => page.month === pageToNavTo.month)
           if (pagesForTheSameMonth.length > 0) {
               let monthlyLogForMonth = pagesForTheSameMonth.filter(page => page.layout === "Monthly Log")
               if (monthlyLogForMonth.length > 0) {
                   this.props.setEvents(monthlyLogForMonth[0].events)
               }   
           }
           fetch(`http://localhost:3000/pages/${pageToNavTo.id}`)
            .then(r => r.json())
            .then((page) => {
                this.props.setPage(page)
                this.props.getTasks(page.tasks)})
        } else if (pageToNavTo.layout.includes("Habit Tracker") && this.props.page.month !== pageToNavTo.month) {
            this.props.getHabits([])
            this.props.getStreaks([])
            fetch(`http://localhost:3000/pages/${pageToNavTo.id}`)
            .then(r => r.json())
            .then((page) => {
                this.props.setPage(page)
                this.props.getHabits(page.habits)
                page.habits.forEach(habit => {
                    this.props.getStreaks(habit.streaks)
                })
            })
        } else {
            fetch(`http://localhost:3000/pages/${pageToNavTo.id}`)
            .then(r => r.json())
            .then((page) => {
                this.props.setPage(page)
                this.props.setEvents(page.events)
            })
        }
    }

    togglePageForm = (evt, pageToUpdate) => {
        if (pageToUpdate) {
            if (this.state.showPageForm === false) {
                this.setState({
                    showPageForm: true,
                    updatePage: pageToUpdate,
                    updateForm: true,
                    pageLayout: pageToUpdate.layout 
                })
            } else {
                this.setState({
                    showPageForm: false,
                    updatePage: {},
                    updateForm: false
                })
            }
        } else {
            if (this.state.showPageForm === false) {
                this.setState({
                    showPageForm: true,
                    pageLayout: '',
                    updatePage: {},
                    updateForm: false 
                })
            } else {
                this.setState({
                    showPageForm: false,
                    pageLayout: '',
                    updatePage: {},
                    updateForm: false
                })
            }
        }
        
    }

    //page form
    handlePageFormMonthChange = (evt) => {
        this.setState({
            pageMonth: evt.target.value
        })
    }

    handlePageFormLayoutChange = (evt) => {
        this.setState({
            pageLayout: evt.target.value
        })
    }

    handlePageFormWeekChange = (evt) => {
        this.setState({
            weeklyLayoutWeek: evt.target.value
        })
    }


    newPageSubmit = (evt) => {
        evt.preventDefault()

        if (this.state.weeklyLayoutWeek !== '') {
            let layoutName = `${this.state.pageLayout} - ${this.state.weeklyLayoutWeek}`
            fetch("http://localhost:3000/pages", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'accepts': 'application/json'
            },
            body: JSON.stringify({
                month: this.state.pageMonth,
                layout: layoutName,
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
        } else {
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

        
    }

    updatePageSubmit = (evt) => {
        evt.preventDefault()
        fetch(`http://localhost:3000/pages/${this.state.updatePage.id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                'accepts': 'application/json'
            },
            body: JSON.stringify({
                month: this.state.updatePage.month,
                layout: this.state.pageLayout,
                journal_id: this.props.journal.id
            })
        })
        .then(r => r.json())
        .then((updatedPage) => {
            this.props.updatePage(updatedPage)
            this.props.setPage(updatedPage)
            this.setState({
                showPageForm: false
            })
        })
    }

    //delete page
    deletePage = (pageToDelete) => {
        fetch(`http://localhost:3000/pages/${pageToDelete.id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then((msg) => {
            this.props.deletePage(msg.data.id)
        })
    }

    handleUserChange = (evt) => {
        this.setState({
            userId: evt.target.value
        })
    }

    chooseUser = (evt) => {
        evt.preventDefault()
        fetch(`http://localhost:3000/users/${this.state.userId}`)
        .then(r => r.json())
        .then((user) => {
            this.props.setUser(user)
            this.props.setPage({})
        })

        let userIdInteger = parseInt(this.state.userId)
        let userJournals = this.props.journals.filter(journal => journal.user_id === userIdInteger)
        let userFirstJournal = userJournals[0]
        fetch(`http://localhost:3000/journals/${userFirstJournal.id}`)
        .then(r => r.json())
        .then((journal) => {
           this.props.setJournal(journal) 
           let allUsersPages = this.props.pages.filter(page => page.journal_id === this.props.journal.id)
           this.props.getUserPages(allUsersPages)
        })
    }

    renderPageForm = () => {
        if (this.state.updateForm) {
            return <PageForm handlePageFormWeekChange={this.handlePageFormWeekChange} updateForm={this.state.updateForm} togglePageForm={this.togglePageForm} updatePageSubmit={this.updatePageSubmit} handlePageFormLayoutChange={this.handlePageFormLayoutChange} pageMonth={this.state.updatePage.month} pageLayout={this.state.pageLayout}/>
        } else {
            return <PageForm handlePageFormWeekChange={this.handlePageFormWeekChange} updateForm={this.state.updateForm} togglePageForm={this.togglePageForm} newPageSubmit={this.newPageSubmit} handlePageFormMonthChange={this.handlePageFormMonthChange} handlePageFormLayoutChange={this.handlePageFormLayoutChange} pageMonth={this.state.pageMonth} pageLayout={this.state.pageLayout}/>
        }
    }

    handleLogout = () => {
        this.props.setUser({})
        this.props.getUserPages([])
        this.props.setPage({})
        this.props.setJournal({})
    }
    

    render() {
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
            text-align: left;
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
            padding-bottom: 20%;
            width: 100%;
            overflow-y: scroll;
            text-align: center;
            -webkit-transition: opacity 300ms ease-in, visibility 0s ease-in 300ms;
            transition: opacity 300ms ease-in, visibility 0s ease-in 300ms;
        `;

        
        return(
            <div>
                <TopNavBar handleLogout={this.handleLogout} users={this.props.users} userId={this.state.userId} handleUserChange={this.handleUserChange} chooseUser={this.chooseUser}/>
                <IndexStyle>
                    <MenuToggle />
                    <NavbarHeader>
                        <Container maxWidth="xs">
                            <Paper elevation={3} style={{ padding: 0, margin: 0}}>
                                <IndexBar pages={this.props.userPages} handleNavClick={this.handleNavClick} togglePageForm={this.togglePageForm} deletePage={this.deletePage}/>
                            </Paper>
                        </Container>
                    </NavbarHeader>
                </IndexStyle>
                    {this.state.showPageForm ? <><p>   </p>{this.renderPageForm()}</> : <JournalContainer journal={this.props.journal} page={this.props.page} events={this.props.events} togglePageForm={this.togglePageForm}/>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        hello: state.hello,
        user: state.user,
        journal: state.journal,
        pages: state.pages,
        page: state.page,
        events: state.events,
        users: state.users,
        journals: state.journals,
        userPages: state.userPages,
        tasks: state.tasks,
        habits: state.habits,
        streaks: state.streaks
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setUser: (user) => { dispatch({type: "SET_USER", payload: user}) }
//     }
// }

export default connect(mapStateToProps, { setUser, setJournal, setPages, setPage, setEvents, addPage, deletePage, updatePage, getUsers, getJournals, getUserPages, getTasks, getHabits, getStreaks })(mainContainer)