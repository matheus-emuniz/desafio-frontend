import React from 'react'

export default function Icon({ state }) {
    return (
        <span className={`icon ${state === "open" ? "has-text-success" : "has-text-danger"}`} title={state}>
            {
                <i className={`mdi mdi-18px ${state === "open" ? "mdi-alert-circle-outline" : "mdi-close-circle-outline"}`}></i>
            }
        </span>
    )
}
