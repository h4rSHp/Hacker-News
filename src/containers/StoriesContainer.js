import React, { useEffect, useState } from 'react'
import { getStoryIds } from '../services/hnApi'
import InfiniteScroll from "react-infinite-scroll-component";
import { Story } from '../components/Story'
import { AnimationContainer } from './AnimationContainer'

function StoriesContainer() {
    //[] for initialsing variable to empty array
    const [storyIds, setStoryIds] = useState([]);
    const [elementNo, setElementNo] = useState(20);
    const [hasMore, setHasMore] = useState(true);
    // const [isIntersecting, setIsIntersecting] = useState(false);

    const loadMoreData = () => {
        if (elementNo === 500) {
            setHasMore(false);
        }
        setElementNo(elementNo + 20);
    }

    useEffect(() => {
        // get story Ids
        getStoryIds().then(data => setStoryIds(data))
    }, [])
    //[] so that can run once, can provide any variable to change when value changes

    return (
        <InfiniteScroll
            dataLength={elementNo}
            next={loadMoreData}
            hasMore={hasMore}
            loader={AnimationContainer}
            endMessage={
                <p style={{ textAlign: "center" }}>
                    <b>Yupp!! That's it!!</b>
                </p>
            }
        >
            {storyIds.map((storyId, index) => (index + 1 < elementNo) ? <Story key={storyId} storyId={storyId} /> : null)}
        </InfiniteScroll>
    )
}
export default StoriesContainer