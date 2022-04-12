import React, { useContext, useCallback } from "react";
import { MouseContext } from "../context/mouse-context";
import { LearnMore } from '../../components/Button/index'

import { Link } from "react-router-dom";


export const Button = (props) => {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);

    return (
        <Link to={`${props.route}`} style={{
            textDecoration: 'none',
        }}>
            <LearnMore
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}
                onClick={() => cursorChangeHandler("")}
            >
                <a> {props.text} </a>
            </LearnMore>
        </Link>
        
    );
    
};