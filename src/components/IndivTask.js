import React, { Component } from 'react'
import { connect } from 'react-redux'

class IndivTask extends Component {

    randomNumber() {
        const number = Math.floor(Math.random() * this.props.quotes.length) + 0;
        return number
    }
    
    render() {
        return (
            <div>
                <p>{this.props.quotes[this.randomNumber()].text}</p>
            </div>
        )
    }
}

function mapStateToProps({quotes}) {
    return {
        quotes
    }
}

export default connect(mapStateToProps)(IndivTask)