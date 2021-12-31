import { ChatEngine } from "react-chat-engine";

import "./App.css";

const App = () => {
	return (
		<ChatEngine
			height='100vh'
			userName='admin'
			userSecret='123123'
			projectID='39e2f4e3-8ba9-41c6-ac72-a232c22ab811'
		/>
	);
};

export default App;
