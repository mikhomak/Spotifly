import React from 'react';

interface NavigationItemProps {
    name: string
};

export const NavigationItem: React.FC<NavigationItemProps> = (props) => {
    return (
        <div>
            {props.name}
        </div>
    );
};