const StoryList = ({ stories }) => {
    return (
        <div>
            <h2>Stories</h2>
            <ul>
                {stories.map((story, index) => (
                    <li key={index}>
                        <h3>{story.title} (Published on {story.date})</h3>
                        <p>{story.story}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};