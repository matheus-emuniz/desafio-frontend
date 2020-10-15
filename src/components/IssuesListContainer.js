import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";

import { setIssues, setPage, setLastPage, setSearchParams } from '../redux/actions';

import IssuesList from './IssuesList';
import Filters from './Filters';
import Pagination from './Pagination';

function IssuesListContainer() {
    const dispatch = useDispatch();

    const issues = useSelector(state => state.issues);
    const searchParams = useSelector(state => state.searchParams);
    const page = useSelector(state => state.searchParams.page);
    const lastPage = useSelector(state => state.lastPage);

    const [loading, setLoading] = useState(false);

    const nextPage = () => {
        if (page === lastPage) return;
        dispatch(setPage(page + 1));
    }

    const previousPage = () => {
        if (page === 1) return;
        dispatch(setPage(page - 1));
    }

    const onTriggerSearch = ({ labelsSearchValue, sort, sortDirection, stateValue }) => {
        dispatch(setSearchParams({
            labels: labelsSearchValue,
            sort: sort,
            direction: sortDirection,
            state: stateValue,
        }))
    }

    const getLastPageNumber = (linkHeader) => {
        if (!linkHeader) return;
        // if (lastPage === page) return lastPage;

        const linkHeaderSplit = linkHeader.split(",");
        let lastPageLink = linkHeaderSplit.filter((link) => link.includes('rel="last"'))[0];

        if(!lastPageLink) return lastPage;

        lastPageLink = new URL(lastPageLink.replace(/(<|>)/g, ""));

        const newLastPage = lastPageLink.searchParams.get("page").replace(/[^0-9.]/g, "");
        return parseInt(newLastPage);
    }

    const goToPage = (page) => {
        if (!(page >= 1 && page <= lastPage)) return;
        dispatch(setPage(page));
    }

    useEffect(() => {
        async function getIssues() {
            setLoading(true);
            let response = await axios.get("https://api.github.com/repos/facebook/react/issues", {
                params: {
                    ...searchParams
                }
            });
            dispatch(setLastPage(getLastPageNumber(response.headers.link)))
            dispatch(setIssues(response.data))
            setLoading(false);
        }

        getIssues();
    }, [searchParams, dispatch])

    return (
        <>
            <Filters onTriggerSearch={onTriggerSearch} />
            <Pagination issuesCount={issues.length} page={page} nextPage={nextPage} previousPage={previousPage} goToPage={goToPage} lastPage={lastPage} />
            <IssuesList issues={issues} loading={loading} />
        </>
    )
}

export default IssuesListContainer;