import { atom } from "recoil";
import { Album } from "../interfaces";

export const albumState = atom<Album | null>({
	key: "album",
	default: null,
});
