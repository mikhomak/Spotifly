import React from 'react';
import {NavigationItem} from './navigationItem/navigationItem';

interface NavigationItemsProps {
    kek?: string
}

export const NavigationItems: React.FunctionComponent<NavigationItemsProps> = (props) => {
    return (
        <div>
            <NavigationItem name='connect'/> 
            <NavigationItem name='login'/> 
        </div>
    );
};
