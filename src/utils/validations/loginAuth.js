import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

export default function(ComposedComponent){

    class LoginAuth extends React.Component{

        componentWillMount(){
            if(0){
                this.props.history.push('/login')
            }
        }

        componentDidUpdate(nextProps){
            
            if(!nextProps.isLogin){
                this.props.history.push('/login')
            }
        }

        render() {
            return (
                <ComposedComponent {...this.props} ></ComposedComponent>
            )
            
        }
    }
    return withRouter(LoginAuth)
}