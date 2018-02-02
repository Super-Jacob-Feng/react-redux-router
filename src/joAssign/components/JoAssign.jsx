import React, { Component } from 'react'
import { render } from 'react-dom'

import LeftContent from '../../global/components/LeftContent.jsx'
import RightContent from '../../global/components/RightContent.jsx'

import '../css/joAssign.less'

class JoAssign extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('JoAssign componentDidMount')
    }

    componentWillMount() {
        console.log('JoAssign componentWillMount')
    }

    componentWillUnmount() {
        console.log('JoAssign componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('JoAssign componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('JoAssign componentDidUpdate')
    }

    render() {
        const { state, actions } = this.props

        console.debug('joAssign component state: ', state.toJS())

        return (
            <div>
                <div className="joassign">{state.get('joAssignState')}</div>
                <LeftContent
                    state={state.get('leftContentState')}
                />
                <RightContent
                    state={state.get('rightContentState')}
                />
            </div>
        )
    }
}

export default JoAssign