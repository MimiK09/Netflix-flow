import "./App.css";
import data from "./assets/movies_rnexgr.json";
import logonetflix from "./img/logonetflix.png";
import Section from "./components/Section";

function App() {
	return (
		<>
			<header>
				<img src={logonetflix} alt="logo-netflix" />
			</header>
			<Section json={data}/>
		</>
	);
}

export default App;
