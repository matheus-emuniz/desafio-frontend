import React, { useState } from 'react'

export default function Filters({ onTriggerSearch }) {

    const [labelsSearchValue, setLabelsSearchValue] = useState("");
    const [stateValue, setStateValue] = useState("all");
    const [sort, setSort] = useState("newest");
    const [sortDirection, setDirection] = useState("desc");

    const onOrderbyChange = (event) => {
        switch (event.target.value) {
            case "oldest":
                setSort("created")
                setDirection("asc")
                break;
            case "comments":
                setSort("comments")
                setDirection("desc")
                break;
            default:
                setSort("created")
                setDirection("desc")
                break;
        }
    }

    const onLabelChange = (event) => {
        setLabelsSearchValue(event.target.value)
    }

    const onSearchClick = () => {
        onTriggerSearch({
            labelsSearchValue,
            sort,
            sortDirection,
            stateValue,
        })
    }

    const onStateChange = (event) => {
        setStateValue(event.target.value)
    }

    return (
        <div className="box level">
            <strong className="is-size-4 level-item level-left">React Repo Issues</strong>
            <div className="select mr-2">
                <select onChange={onStateChange}>
                    <option value="all">All</option>
                    <option value="open">Open</option>
                    <option value="closed">Closed</option>
                </select>
            </div>
            <div className="select mr-2">
                <select onChange={onOrderbyChange}>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="comments">Comments</option>
                </select>
            </div>
            <div className="control level level-item has-icons-left">
                <input className="input" type="text" placeholder="Labels" onChange={onLabelChange} />
                <span className="icon is-left">
                    <i className="mdi mdi-magnify mdi-18px"></i>
                </span>
                <button className="button is-info ml-2" onClick={onSearchClick}>
                    Search
                </button>
            </div>
        </div>
    )
}
