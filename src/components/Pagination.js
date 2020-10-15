import React from 'react'

export default function Pagination({ page, nextPage, previousPage }) {
    return (
        <nav className="pagination is-centered box" role="navigation" aria-label="pagination">
            <button className=" button pagination-previous" title="This is the first page" disabled={page === 1} onClick={previousPage}>Previous</button>
            <button className="button pagination-next" onClick={nextPage}>Next page</button>
            <ul className="pagination-list">
                <span className="mr-1">Page: </span>
                <li>
                    <a className="pagination-link">{page}</a>
                </li>
            </ul>
        </nav>
    )
}
