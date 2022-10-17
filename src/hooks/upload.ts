import { useCallback } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc, arrayUnion, updateDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { database } from "../config";
import { useRecoilState } from "recoil";
import { Picture } from "../interfaces";
import { albumState, loadingState } from "../atoms";

const useUpload = () => {
	const params = useParams();
	const [, setIsLoading] = useRecoilState(loadingState);
	const [, setAlbum] = useRecoilState(albumState);
	const dashedParams = params["*"]!.replaceAll("/", "_");
	const storage = getStorage();
	const albumRef = doc(database, "routes", dashedParams);

	const create = useCallback(async (file: File) => {
		const storageRef = ref(storage, file.name);
		setIsLoading((loadingState) => !loadingState);

		try {
			const uploadedFileResponse = await uploadBytes(storageRef, file);
			const imageInfo: Picture = {
				id: uuidv4(),
				name: file.name,
				link: await getDownloadURL(uploadedFileResponse.ref),
			};

			await setDoc(albumRef, { images: arrayUnion(imageInfo) });

			setIsLoading((loadingState) => !loadingState);
			setAlbum((pictures) => [...pictures!, imageInfo]);
		} catch (error) {
			console.error(error);
		}
	}, []);

	const update = useCallback(async (file: File) => {
		const storageRef = ref(storage, file.name);
		setIsLoading((loadingState) => !loadingState);

		try {
			const uploadedFileResponse = await uploadBytes(storageRef, file);
			const imageInfo: Picture = {
				id: uuidv4(),
				name: file.name,
				link: await getDownloadURL(uploadedFileResponse.ref),
			};

			await updateDoc(albumRef, { images: arrayUnion(imageInfo) });

			setIsLoading((loadingState) => !loadingState);
			setAlbum((pictures) => [...pictures!, imageInfo]);
		} catch (error) {
			console.error(error);
		}
	}, []);

	return { create, update };
};

export default useUpload;
