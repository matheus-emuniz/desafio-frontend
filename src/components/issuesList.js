import React from 'react'
import Issue from './Issue'

export default function issuesList({ issues }) {
    return (
        <div>
            {
                issues.map(issue => (
                    <Issue issue={issue} />
                ))
            }
        </div>
    )
}
