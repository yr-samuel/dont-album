import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { database } from "../config";
import { Album, Field } from "../interfaces";
import { useRecoilState } from "recoil";
import { albumState } from "../atoms";

const useAlbum = () => {
	const [, setAlbum] = useRecoilState(albumState);
	const params = useParams();
	const dashedParams = params["*"]!.replaceAll("/", "_");

	useEffect(() => {
		(async () => {
			const albumRef = doc(database, "routes", dashedParams);
			const albumResponse = await getDoc(albumRef);

			if (!albumResponse.exists()) return;
			const { images } = albumResponse.data() as Field;

			setAlbum(images);
		})();
	}, [params]);
};

export default useAlbum;
