import React from "react"

interface buttonProps {
    onClickEvent: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}
export const Button: React.FC<buttonProps> = (props) => (
    <button onClick={props.onClickEvent}>
        {props.children}
    </button >
);