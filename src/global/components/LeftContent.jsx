import React, { Component } from 'react'
import { render } from 'react-dom'

import '../css/leftContent.less'

class LeftContent extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('LeftContent componentDidMount')
    }

    componentWillMount() {
        console.log('LeftContent componentWillMount')
    }

    componentWillUnmount() {
        console.log('LeftContent componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('LeftContent componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('LeftContent componentDidUpdate')
    }

    render() {
        const { state, actions } = this.props

        console.debug('leftcontent component state: ', state.toJS())

        return (
            <div>
                <span className="leftcontent">{state.get('leftContentLabel')}</span>
            </div>
        )
    }
}

export default LeftContent