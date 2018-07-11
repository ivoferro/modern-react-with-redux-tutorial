import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = props => {
  let videos = props.videos.map(v => <VideoListItem onVideoSelect={props.onVideoSelect} key={v.etag} video={v} />)
  return(
    <ul className="col-md-4 list-group">
      {videos}
    </ul>
  )
}

export default VideoList