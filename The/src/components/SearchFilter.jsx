
function SearchFilter({ filter, setFilter }) {

    return (
        <div className="mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Search transactions..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
        </div>
    );
}

export default SearchFilter;
