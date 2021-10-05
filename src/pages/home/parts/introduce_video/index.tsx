import React from 'react';
import './style.scss';

interface Props {
  width?: string | number;
  height?: string | number;
}

const VideoPlayer: React.FC<Props> = ({
	width = '100vw',
	height = '100vh',
}) => (
	<div
		className="video-player-container"
		style={{
			width,
			height,
		}}
	>
		<video
			id="video"
			autoPlay
			loop
			muted
			src="https://ncuhome-warehouse.oss-cn-shanghai.aliyuncs.com/%E5%AE%A3%E8%AE%B2%E4%BC%9A%E8%A7%86%E9%A2%91.mp4"
		/>
	</div>
);

export default VideoPlayer;
