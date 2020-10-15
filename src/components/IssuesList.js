import React from 'react'
import Issue from './Issue'

export default function IssuesList({ issues, loading }) {
    return (
        <>
            {
                loading ?
                    <div className="box has-text-centered">
                        <span className="icon">
                            <i className="mdi mdi-loading mdi-spin mdi-48px"></i>
                        </span>
                    </div> :
                    issues.map((issue, index) => (
                        <Issue key={issue.id} index={index} issue={issue} />
                    ))
            }
        </>
    )
}
