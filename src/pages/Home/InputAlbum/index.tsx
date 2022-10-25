import React, { memo, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";

const InputAlbum = () => {
	const navigate = useNavigate();
	const inputRef = useRef<HTMLInputElement | null>(null);
	const HOME_URL = useMemo(
		() => location.href.replace(/https:\/\/|http:\/\//, "www."),
		[]
	);

	const moveToAlbum = () => {
		if (!inputRef.current) return;
		navigate(`/${inputRef.current.value}`);
	};

	return (
		<div className="d-inline-flex align-items-center gap-1 flex-wrap justify-content-center text-center">
			{HOME_URL} <input type="text" ref={inputRef} />
			<button className="btn btn-primary btn-sm" onClick={moveToAlbum}>
				GO
			</button>
		</div>
	);
};

export default memo(InputAlbum);
