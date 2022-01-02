import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed'

import "./App.css";

//-- Start from 12m
//-- https://enhanced-videos.dllplayer.com/player?v=jcOKU9f86XE

const App = () => {
	return (
		<ChatEngine
			height='100vh'
			userName='admin'
			userSecret='123123'
			projectID='39e2f4e3-8ba9-41c6-ac72-a232c22ab811'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
};

export default App;
