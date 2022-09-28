const SortBy = () => {
    return (
        <nav className="sortBar">
            <div className="logo"><p>Sort By</p></div>
            <ul>
                <div className="sortByMenu">
                    <li>
                    <select name="sortBy" id="sortBy">
                            <option value="date">Date</option>
                            <option value="comments">Descending</option>
                            <option value="votes">Votes</option>
                        </select>

                    </li>
                    <li>
                        <select name="order" id="order">
                            <option value="descending">Highest</option>
                            <option value="ascending">Lowest</option>
                        </select>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default SortBy