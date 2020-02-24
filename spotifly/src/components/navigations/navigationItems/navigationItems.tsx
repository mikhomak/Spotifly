import React from 'react';
import {NavigationItem} from './navigationItem/navigationItem';
import './navigationItems.css';

interface NavigationItemsProps {
    kek?: string
}

export const NavigationItems: React.FC<NavigationItemsProps> = (props) => {
    return (
        <div>
            <NavigationItem name='we'/> 
        </div>
    );
};
