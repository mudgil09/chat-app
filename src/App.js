import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = 'f6aaf0a2-3d00-4a14-952b-e53a652ce17b';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
     // onNewMessage={() => new Audio('https://pixabay.com/sound-effects/decidemp3-14575/').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;