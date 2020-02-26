import React from "react"

interface buttonProps {
    onClickEvent: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}
export const Button: React.FunctionComponent<buttonProps> = (props) => (
    <button onClick={props.onClickEvent}>
        {props.children}
    </button >
);