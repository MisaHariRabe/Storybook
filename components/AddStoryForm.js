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

        const actualDate =
            new Date().getDate() + "/"
            + (new Date().getMonth() + 1) + "/"
            + new Date().getFullYear();

        const newStory = { title, story, date: actualDate };

        addStory(newStory);
        setTitle("");
        setStory("");
    };

    return (
        <>
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title" className="form-label">Title</label><br />
                    <input
                        value={title}
                        onChange={handleTitleChange}
                        type="text"
                        placeholder="Enter your title"
                        id="title"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="story" className="form-label">Story</label><br />
                    <textarea
                        value={story}
                        onChange={handleStoryChange}
                        placeholder="Enter your story"
                        id="story"
                        className="form-control"
                    ></textarea>
                </div>
                <button className="btn btn-primary" type="submit">Save story</button>
            </form>
        </>
    );
};