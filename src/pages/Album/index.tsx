import { useRef } from "react";
import { useUpload } from "../../hooks";
import useAlbum from "../../hooks/album";

const Album = () => {
	const upload = useUpload();
	const album = useAlbum();
	const albumName = location.pathname;
	const inputRef = useRef<HTMLInputElement | null>(null);

	const handleInputClick = () => {
		if (!inputRef) return;
		inputRef.current?.click();
	};

	const handleUploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
		const [file] = event.target.files || [];
		if (!file) return;

		if (!album) upload.create(file);
		upload.update(file);
	};

	return (
		<section style={{ height: "100vh" }}>
			<header className="text-center pt-2 pb-1">
				Welcome to album <span className="text-primary">{albumName}</span>
			</header>
			<main className="p-2 flex-wrap d-flex">
				{album?.map(({ link, name, id }) => (
					<img key={id} src={link} className="rounded d-block" alt={name} />
				))}
			</main>
			<input
				type="file"
				className="d-none"
				ref={inputRef}
				onChange={handleUploadImage}
			/>
			<button
				className="btn btn-primary position-fixed bottom-0 end-0 mb-3 mx-3 rounded-circle d-flex justify-content-center align-items-center"
				style={{ width: 50, height: 50 }}
				onClick={handleInputClick}
			>
				+
			</button>
		</section>
	);
};

export default Album;
