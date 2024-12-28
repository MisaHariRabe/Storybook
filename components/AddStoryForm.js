const AddStoryForm = ({ addStory }) => {
    const [title, setTitle] = React.useState("");
    const [story, setStory] = React.useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleStoryChange = (e) => {
        setStory(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !story) {
            alert("Please enter a title and a story");
            return;
        }

        const actualDate =
            new Date().getDate() + "/"
            + (new Date().getMonth() + 1) + "/"
            + new Date().getFullYear();

        const newStory = { title, story, date: actualDate };

        addStory(newStory);
        setTitle("");
        setStory("");
    };

    const styles = {
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        },
        input: {
            padding: '10px',
            fontSize: '1em',
            borderRadius: '5px',
            border: '1px solid #ccc'
        },
        textarea: {
            padding: '10px',
            fontSize: '1em',
            borderRadius: '5px',
            border: '1px solid #ccc',
            height: '100px'
        },
        button: {
            padding: '10px 20px',
            fontSize: '1em',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#333',
            color: '#fff',
            cursor: 'pointer'
        }
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={handleTitleChange}
                style={styles.input}
            />
            <textarea
                placeholder="Story"
                value={story}
                onChange={handleStoryChange}
                style={styles.textarea}
            />
            <button type="submit" style={styles.button}>Add Story</button>
        </form>
    );
};