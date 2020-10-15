import React from 'react'

export default function Pagination({ page, nextPage, previousPage, lastPage, goToPage, issuesCount }) {
    console.log(page, lastPage)
    return (
        <>
            {
                issuesCount > 0 ?
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
                                                <button className="pagination-link button" onClick={event => goToPage(1)}>1</button>
                                            </li>
                                            <li>
                                                <span className="pagination-ellipsis">&hellip;</span>
                                            </li>
                                            <li>
                                                <button className="pagination-link button" onClick={previousPage}>{page - 1}</button>
                                            </li>
                                        </> :
                                        <li>
                                            <button className="pagination-link button" onClick={previousPage}>{page - 1}</button>
                                        </li>
                            }
                            <li>
                                <button className="pagination-link is-current button">{page}</button>
                            </li>
                            {
                                page !== lastPage ?
                                    <>
                                        <li>
                                            <button className="pagination-link button" onClick={nextPage}>{page + 1}</button>
                                        </li>
                                        <li>
                                            <span className="pagination-ellipsis">&hellip;</span>
                                        </li>
                                        <li>
                                            <button className="pagination-link button" onClick={event => goToPage(lastPage)}>{lastPage}</button>
                                        </li>
                                    </> : null
                            }
                        </ul>
                    </nav> : null
            }
        </>
    )
}
