import React, {Component} from 'react';
import classes from './Layout.css';
import Auxe from '../../Hoc/Auxe';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import {connect} from 'react-redux';




class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    backdropCloseHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawertoggleHandler = ()=> {
        this.setState(prevState =>{
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }


    render(){
        return(
            <Auxe>
            <Toolbar isAuth={this.props.isAthenticate} sidedraweToggle={this.sideDrawertoggleHandler} />
            <SideDrawer isAuth={this.props.isAthenticate} show={this.state.showSideDrawer} close={this.backdropCloseHandler} />
            <main className={classes.Content}> {this.props.children} </main>
            </Auxe>
        )
    }
};
const mapStateToProps = state => {
    return {
        isAthenticate: state.auth.idToken !== null
    }
} 
export default connect(mapStateToProps) (Layout);