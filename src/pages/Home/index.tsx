import InputAlbum from "./InputAlbum";
import ReasonsList from "./ReasonsList";

const Home = () => {
	return (
		<section
			className="d-flex align-items-center justify-content-center pt-5 flex-column gap-5"
			style={{ height: "100vh" }}
		>
			<h1 className="text-uppercase">dontalbum</h1>
			<InputAlbum />
			<ReasonsList />
		</section>
	);
};

export default Home;
