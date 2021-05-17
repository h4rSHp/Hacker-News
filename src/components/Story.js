import React, { useEffect, useState } from 'react'
import { getStory } from '../services/hnApi'
import styles from '../styles/Story.module.css'



export const Story = ({ storyId }) => {

    const [story, setStory] = useState({})

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data))
    }, [])

    return story && story.url ? (
        <>
            <a target='_blank' href={story.url}>
                <div className={styles.tile}>
                    <p>{story.title}</p>
                By : {story.by}
                </div>
            </a>
        </>
    ) : null
}
