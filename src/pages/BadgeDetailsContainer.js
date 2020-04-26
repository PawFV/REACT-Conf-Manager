import React, { Component } from 'react'

import BadgeDetails from './BadgeDetails'

import Loader from '../components/Loader'
import Error from './NotFound'
import api from '../api'



export class BadgeDetailsContainer extends Component {
    state = {
        loading: true,
        error: null,
        data: {},
        modalIsOpen: false
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })
        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({ loading: false, data: data })

        } catch (error) {
            this.setState({ loading: false, data: error })
        }
    }

    openModal = e => {
        this.setState({ modalIsOpen: true })
    }
    closeModal = e => {
        this.setState({ modalIsOpen: false })
    }

    deleteBadge = async e => {
        this.setState({ loading: true, error: null })
        try {
            await api.badges.remove(
                this.props.match.params.badgeId
            )
            this.props.history.push('/badges')
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    isEmpty(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true
    }

    render() {
        if (this.state.loading) return <Loader />

        if (this.state.error) return <Error />

        if (this.isEmpty(this.state.data)) return <Error />

        const badge = this.state.data
        return (
            <BadgeDetails
                badge={badge}
                closeModal={this.closeModal}
                openModal={this.openModal}
                deleteBadge={this.deleteBadge}
                modalIsOpen={this.state.modalIsOpen}
            />
        )
    }
}

export default BadgeDetailsContainer
