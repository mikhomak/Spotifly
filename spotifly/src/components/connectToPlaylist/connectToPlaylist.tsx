import React from "react";
import { Button } from '../UI/button/button';

export const ConnectToPlaylist = () => {


    const log = () => console.log('well');


    return (
        <div>
            <input type="text" />
            <Button onClickEvent={log}>Connect</Button>
        </div>
    );
};