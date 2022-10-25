import { memo } from "react";

const ReasonsList = () => {
	return (
		<ul className="list-unstyled d-flex flex-column gap-2 text-center">
			<li>Dont login, just use a URL</li>
			<li>Dont save, image is auto-saved!</li>
			<li>Share or save images online</li>
			<li>Dont forget, you can use yourURL/yourFolder/yourSubfolder</li>
			<li>Dontalbum!</li>
		</ul>
	);
};

export default memo(ReasonsList);
