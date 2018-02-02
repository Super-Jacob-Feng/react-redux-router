import React, { Component } from 'react'
import { render } from 'react-dom'

import LeftContent from '../../components/LeftContent.jsx'
import RightContent from '../../components/RightContent.jsx'

import '../css/trialWeave.less'

class TrialWeave extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('TrialWeave componentDidMount')
    }

    componentWillMount() {
        console.log('TrialWeave componentWillMount')
    }

    componentWillUnmount() {
        console.log('TrialWeave componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('TrialWeave componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('TrialWeave componentDidUpdate')
    }

    render() {
        const { state, actions } = this.props

        console.debug('trialweave component state: ', state.toJS())

        return (
            <div>
                <div className="trialweave">{state.get('trialWeaveState')}</div>
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

export default TrialWeave