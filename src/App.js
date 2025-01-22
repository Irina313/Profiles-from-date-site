import DatingProfile from './DatingProfile';
import './App.css';

function App() {
  return (
    <div>
     <DatingProfile img = "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww" name = "Bob" age = "32 years old" description = "Looking for smart, funny and easy going girl"/>
    <DatingProfile img = "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww" name = "Steve" age = "35 years old" description = "Looking for intelligent and well-mannered woman" />
    <DatingProfile img = "https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" name = "James" age = "35 years old" description = "Looking for sporty and active girl who llikes rock music" />
    </div>
  );
}

export default App;
