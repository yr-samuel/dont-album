export interface Picture {
	id: string;
	link: string;
	name: string;
}

export type Album = Picture[];

export interface Field {
	images: Album;
}
