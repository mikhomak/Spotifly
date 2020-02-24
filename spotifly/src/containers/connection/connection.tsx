import React from "react"
import { Component } from 'react'
import { NavigationItems } from '../../components/navigations/navigationItems/navigationItems';
import { ConnectToPlaylist } from '../../components/connectToPlaylist/connectToPlaylist'
import { Footer } from '../../components/footer/footer';

class Connection extends Component {


    render() {
        return (
            <div>
                <NavigationItems />
                <ConnectToPlaylist />
                <Footer />
            </div>
        );
    }
}

export default Connection;