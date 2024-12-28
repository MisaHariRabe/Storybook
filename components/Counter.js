const Counter = () => {
    const [state, setState] = React.useState(0);

    const handleDecrement = () => {
        if (state > 0) {
            setState(state - 1);
        }
    };

    const handleIncrement = () => {
        setState(state + 1);
    };

    return (
        <div className="counter-container">
            <button className="button decrement" onClick={handleDecrement}>-</button>
            <span>Count is {state}</span>
            <button className="button increment" onClick={handleIncrement}>+</button>
        </div>
    );
};