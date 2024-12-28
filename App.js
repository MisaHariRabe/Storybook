const App = () => {
    const [stories, setStories] = React.useState([]);

    const addStory = (story) => {
        setStories([...stories, story]);
    };

    return (
        <>
            <AddStoryForm addStory={addStory} />
            <StoryList stories={stories} />
        </>
    );
}