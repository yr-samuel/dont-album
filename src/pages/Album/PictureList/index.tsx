import { useContext } from "react";
import { AlbumContext } from "../../../contexts";
import { useUpload } from "../../../hooks";

const PictureList = () => {
	const album = useContext(AlbumContext);
	const upload = useUpload();

	return (
		<main className="container-fluid p-2 pt-4 d-flex flex-wrap gap-3 justify-content-center">
			{album?.map((picture) => {
				const { link, name, id } = picture;
				return (
					<img
						onClick={() => upload.remove(picture)}
						loading="lazy"
						key={id}
						src={link}
						style={{ width: "200px", aspectRatio: "1/1", objectFit: "contain" }}
						className="shadow rounded border "
						alt={name}
					/>
				);
			})}
		</main>
	);
};

export default PictureList;
