import React from 'react'

export default function Issue({ issue }) {
    return (
        <div className="box">
            <span class="icon">
                {
                    <i className={`mdi ${issue.state === "open" ? "mdi-" : "mdi-close-circle-outline"}`}></i>
                }
            </span>
            <strong className="mr-1">{issue.title} </strong> 
                {issue.labels.map(label => (<span className="tag mr-1">{label.name}</span>))}
            <p className="level mt-2">
                <div>
                    <small className="mr-2">#{issue.number}</small>
                    <small className="">opened {new Date(issue.created_at).toDateString()}</small>
                </div>
            </p>
        </div>
    )
}
