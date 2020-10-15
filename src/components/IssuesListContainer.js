import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";

import { setIssues, setPage, setLastPage } from '../redux/actions';

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

    const params = {
        ...searchParams
    };

    const nextPage = () => {
        if(page === lastPage - 1) return;
        dispatch(setPage(page + 1))
    }

    const previousPage = () => {
        if(page === 1) return;
        dispatch(setPage(page - 1))
    }

    const getLastPageNumber = (linkHeader) => {
        if(!linkHeader) return;
        const linkHeaderSplit = linkHeader.split(",");
        const lastPageLink = new URL(linkHeaderSplit.filter((link) => link.includes('rel="last"'))[0].replace(/(<|>)/g, ""));
        const lastPage = lastPageLink.searchParams.get("page").replace(/[^0-9.]/g, "");
        return lastPage;
    }

    useEffect(() => {
        async function getIssues() {
            setLoading(true);
            let response = await axios.get("https://api.github.com/repos/facebook/react/issues", {
                params
            });
            dispatch(setLastPage(getLastPageNumber(response.headers.link)))
            dispatch(setIssues(response.data))
            setLoading(false);
        }

        getIssues();
    }, [searchParams])

    return (
        <>
            <Filters />
            <Pagination page={page} nextPage={nextPage} previousPage={previousPage} />
            <IssuesList issues={issues} loading={loading} />
        </>
    )
}

export default IssuesListContainer;