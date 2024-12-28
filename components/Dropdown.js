const Dropdown = ({ name, id }) => {
    return (
        <div className="dropdown-container">
            <label htmlFor={id}>{name[0].toUpperCase() + name.slice(1)}</label>
            <select className="dropdown" name={name} id={id}>
                {[...Array(10).keys()].map(i => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
            </select>
        </div>
    );
}
