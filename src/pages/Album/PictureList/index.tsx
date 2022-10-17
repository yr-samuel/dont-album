import { useContext } from "react";
import { AlbumContext } from "../../../contexts";

const PictureList = () => {
	const album = useContext(AlbumContext);

	return (
		<main className="container-fluid p-2 pt-4 d-flex flex-wrap gap-3 justify-content-center">
			{album?.map(({ link, name, id }) => (
				<img
					loading="lazy"
					key={id}
					src={link}
					style={{ width: "300px", objectFit: "contain" }}
					className="shadow rounded border "
					alt={name}
				/>
			))}
		</main>
	);
};

export default PictureList;
