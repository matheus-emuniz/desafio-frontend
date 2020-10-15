import React from 'react'

export default function Pagination({ page, nextPage, previousPage, lastPage, goToPage }) {
    console.log(page, lastPage)
    return (
        <nav className="pagination box" role="navigation" aria-label="pagination">
            <button className=" button pagination-previous" disabled={page === 1} onClick={previousPage}>Previous</button>
            <button className="button pagination-next" onClick={nextPage}>Next page</button>
            <ul className="pagination-list">
                {/* <span className="mr-1">Page: </span> */}
                {
                    page === 1 ? null :
                        page > 2 ?
                            <>
                                <li>
                                    <a className="pagination-link" onClick={event => goToPage(1)}>1</a>
                                </li>
                                <li>
                                    <span class="pagination-ellipsis">&hellip;</span>
                                </li>
                                <li>
                                    <a className="pagination-link" onClick={previousPage}>{page - 1}</a>
                                </li>
                            </> :
                            <li>
                                <a className="pagination-link" onClick={previousPage}>{page - 1}</a>
                            </li>
                }
                <li>
                    <a className="pagination-link is-current">{page}</a>
                </li>
                {
                    page != lastPage ?
                        <>
                            <li>
                                <a className="pagination-link" onClick={nextPage}>{page + 1}</a>
                            </li>
                            <li>
                                <span class="pagination-ellipsis">&hellip;</span>
                            </li>
                            <li>
                                <a className="pagination-link" onClick={event => goToPage(lastPage)}>{lastPage}</a>
                            </li>
                        </> : null
                }
            </ul>
        </nav>
    )
}
