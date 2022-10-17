import { createContext, FC } from "react";
import { useRecoilState } from "recoil";
import { albumState } from "../atoms";
import { useAlbum } from "../hooks";
import { Album, ContextAlbum } from "../interfaces/album";

export const AlbumContext = createContext<Album>([]);

const { Provider } = AlbumContext;

interface AlbumProviderProps {
	children: JSX.Element;
}

const AlbumProvider: FC<AlbumProviderProps> = ({ children }) => {
	useAlbum();
	const [album] = useRecoilState(albumState);

	return <Provider value={album}>{children}</Provider>;
};

export default AlbumProvider;
