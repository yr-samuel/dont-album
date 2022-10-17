import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { database } from "../config";
import { Album, Field } from "../interfaces";

const useAlbum = () => {
	const [album, setAlbum] = useState<Album | null>(null);
	const params = useParams();
	const dashedParams = params["*"]!.replaceAll("/", "_");
	console.log(dashedParams);

	useEffect(() => {
		(async () => {
			const albumRef = doc(database, "routes", dashedParams);
			const albumResponse = await getDoc(albumRef);

			if (!albumResponse.exists()) return;
			const { images } = albumResponse.data() as Field;

			setAlbum(images);
		})();
	}, [params]);

	return album;
};

export default useAlbum;
