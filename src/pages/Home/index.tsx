import { useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	const inputRef = useRef<HTMLInputElement | null>(null);
	const HOME_URL = useMemo(
		() => location.href.replace(/https:\/\/|http:\/\//, "www."),
		[]
	);

	const moveToAlbum = () => {
		if (!inputRef.current) return;
		navigate(`/${inputRef.current.value}`);
	};

	return (
		<section
			className="d-flex align-items-center justify-content-center pt-5 flex-column gap-5"
			style={{ height: "100vh" }}
		>
			<h1>DONTALBUM</h1>
			<div className="d-inline-flex align-items-center gap-1">
				{HOME_URL} <input type="text" ref={inputRef} />
				<button className="btn btn-primary btn-sm" onClick={moveToAlbum}>
					GO
				</button>
			</div>
			<ul className="list-unstyled d-flex flex-column gap-2 text-center">
				<li>Dont login, just use a URL</li>
				<li>Dont save, image is auto-saved!</li>
				<li>Share or save images online</li>
				<li>Dont forget, you can use yourURL/yourFolder/yourSubfolder</li>
				<li>Dontalbum!</li>
			</ul>
		</section>
	);
};

export default Home;
