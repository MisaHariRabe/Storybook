const StoryList = ({ stories }) => {
    const styles = {
        container: {
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        },
        header: {
            color: '#333'
        },
        list: {
            listStyleType: 'none',
            padding: 0
        },
        listItem: {
            marginBottom: '20px'
        },
        title: {
            fontSize: '1.5em',
            marginBottom: '5px'
        },
        date: {
            color: '#777'
        },
        story: {
            fontSize: '1em',
            lineHeight: '1.5'
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Stories</h2>
            <ul style={styles.list}>
                {stories.map((story, index) => (
                    <li key={index} style={styles.listItem}>
                        <h3 style={styles.title}>{story.title} <span style={styles.date}>(Published on {story.date})</span></h3>
                        <p style={styles.story}>{story.story}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};