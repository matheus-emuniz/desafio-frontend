import React from 'react'

import Icon from './Icon'

export default function Issue({ issue, index }) {
    return (
        <div className={`box m-1 is-loading level ${index % 2 === 0 ? "" : "has-background-light"}`} >
            <div>
                <Icon state={issue.state} />
                <strong className="mr-1">{issue.title} </strong>
                {issue.labels.map(label => (<span key={label.id} style={{ backgroundColor: `#${label.color}` }} className="tag mr-1">{label.name}</span>))}
                <p className="level mt-2">
                    <span>
                        <small className="mr-2">#{issue.number}</small>
                        <small className="mr-2">opened {new Date(issue.created_at).toDateString()}</small>
                        <span className="icon">
                            <i className="mdi mdi-comment"></i>
                            {issue.comments}
                        </span>
                    </span>
                </p>
            </div>

            <button className="button is-primary" onClick={e => {window.open(issue.html_url)}}>
                Open Issue
            </button>
        </div>
    )
}
