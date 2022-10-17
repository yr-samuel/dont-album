import { atom } from "recoil";
import { Album } from "../interfaces";

export const albumState = atom<Album>({
	key: "album",
	default: [],
});
