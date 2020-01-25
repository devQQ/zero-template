import "./style.css";

function App() {
	const [time, setTime] = React.useState(undefined);

	React.useEffect(() => {
		const fetchData = async () => {
			const json = await fetch("/time").then(resp => resp.json());
			console.log(json);
			setTime(json.time);
		};

		fetchData();
	}, []);

	return (
		<div>
			<h1>Welcome</h1>
			<p>This is the index page, written in React.</p>
			<p>
				Current server time is: {time}. This comes from our <i>api.js</i>{" "}
				endpoint.
			</p>
			<br />
			<a href="/about">Go to /about</a>
		</div>
	);
}

export default App;
