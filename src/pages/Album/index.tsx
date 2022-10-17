import AddPicture from "./AddPicture";
import PictureList from "./PictureList";
import AlbumHeader from "./AlbumHeader";
import { AlbumProvider } from "../../contexts";

const Album = () => {
	return (
		<section style={{ height: "100vh" }}>
			<AlbumHeader />
			<AlbumProvider>
				<>
					<PictureList />
					<AddPicture />
				</>
			</AlbumProvider>
		</section>
	);
};

export default Album;
