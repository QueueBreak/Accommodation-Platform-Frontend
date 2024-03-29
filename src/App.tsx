import { useState } from "react";
import viteLogo from "assets/react.svg";

function App() {
	const [count, setCount] = useState(2);

	return (
		<>
			<div>
				<a href="https://vitejs.dev" rel="noreferrer" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" rel="noreferrer" target="_blank">
					<img src={viteLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite - React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</>
	);
}

export default App;
