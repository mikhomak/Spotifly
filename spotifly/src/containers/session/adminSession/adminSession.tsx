import React from 'react';
import { Component } from 'react';
import { NavigationItems } from '../../../components/navigations/navigationItems/navigationItems';
import { Footer } from '../../../components/footer/footer';


export class AdminSession extends Component {


    render = () => {
        return (
            <div>
                <NavigationItems />
                <Footer />
            </div>
        );
    };
}