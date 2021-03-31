// @flow
import * as React from 'react';
import "./Title.css";

interface TitleProps {

}

export const Title: React.FunctionComponent<TitleProps> = (props) => {
    return (
        <h1 className="Title">
            {props.children}
        </h1>
    );
};
