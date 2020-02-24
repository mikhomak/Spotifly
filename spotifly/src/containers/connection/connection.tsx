import React from "react"
import { Component } from 'react'
import { NavigationItems } from '../../components/navigations/navigationItems/navigationItems';
import { ConnectToPlaylist} from '../../components/connectToPlaylist/connectToPlaylist'


class Connection extends Component {


    render() {
        return (
            <div>
                <NavigationItems />
                <ConnectToPlaylist />
            </div>
        );
    }
}

export default Connection;