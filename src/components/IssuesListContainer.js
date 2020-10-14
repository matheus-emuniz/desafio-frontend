import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";

import { setIssues } from '../app/actions';

import IssuesList from './issuesList';

function IssuesListContainer() {
    const dispatch = useDispatch();
    const issues = useSelector(state => state.issues);

    useEffect(() => {
        async function getIssues() {
            let data = await (await axios.get("https://api.github.com/repos/facebook/react/issues?per_page=10")).data;
            dispatch(setIssues(data))
        }

        getIssues()
    })

    return (
        <IssuesList issues={issues} />
    )
}

export default IssuesListContainer;