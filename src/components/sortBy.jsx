const SortBy = ({setSortedBy, setOrderedBy, sortedBy, orderedBy}) => {

    return (
        <nav className="sortBar">
            <div className="logo"><p>Sort By</p></div>
            <ul>
                <div className="sortByMenu">
                    <li>
                    <select onChange={(e) => setSortedBy(e.target.value)} name="sortBy" id="sortBy" value={sortedBy}>
                            <option value="created_at">Date</option>
                            <option value="comment_count">Comments</option>
                            <option value="votes">Votes</option>
                        </select>

                    </li>
                    <li>
                        <select onChange={(e) => setOrderedBy(e.target.value)} name="order" id="order" value={orderedBy}>
                            <option value="desc">Highest</option>
                            <option value="asc">Lowest</option>
                        </select>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default SortBy