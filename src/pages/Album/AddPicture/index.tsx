import React, { FC, useContext, useRef } from "react";
import { useUpload } from "../../../hooks";
import { useRecoilState } from "recoil";
import { loadingState } from "../../../atoms";
import { AlbumContext } from "../../../contexts";

const AddPicture = () => {
	const upload = useUpload();
	const album = useContext(AlbumContext);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const [isLoading] = useRecoilState(loadingState);

	const handleInputClick = () => {
		if (!inputRef) return;
		inputRef.current?.click();
	};

	const handleUploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
		const [file] = event.target.files || [];
		if (!file) return;

		if (!album?.length) return void upload.create(file);
		upload.update(file);
	};

	return (
		<>
			<input
				type="file"
				className="d-none"
				ref={inputRef}
				onChange={handleUploadImage}
				accept="image/*"
			/>
			{isLoading ? (
				<div
					className="spinner-border position-fixed bottom-0 end-0 mb-3 mx-3"
					role="status"
				/>
			) : (
				<button
					className="btn btn-primary position-fixed bottom-0 end-0 mb-3 mx-3 rounded-circle d-flex justify-content-center align-items-center"
					style={{ width: 50, height: 50 }}
					onClick={handleInputClick}
				>
					+
				</button>
			)}
		</>
	);
};

export default AddPicture;
