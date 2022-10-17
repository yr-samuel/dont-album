import { memo } from "react";

const AlbumHeader = () => {
	const albumName = location.pathname;

	return (
		<header className="text-center pt-2 pb-1">
			<h1>
				Welcome to album <span className="text-primary">{albumName}</span>
			</h1>
		</header>
	);
};

export default memo(AlbumHeader);
