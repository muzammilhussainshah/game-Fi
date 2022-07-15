import React, { Component } from "react";

const ButnField = (props) => {
    return (
            <button id="button-addon2" className={props.className} onClick={props.onClick} type={props.type}>
                {props.title}
            </button>
    )
}
export default ButnField;