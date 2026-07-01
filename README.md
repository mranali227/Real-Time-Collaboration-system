# REAL-TIME-COLLABORATION-TOOL

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: SANKET SAVLERAM HOLKAR

*INTERN ID*: CT04DF2639

*DOMAIN*: SOFTWARE DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTOSH

##I recently built a real-time collaborative tool — a project similar in idea to Google Docs, but specifically for collaborative coding. This tool allows multiple users to edit the same code simultaneously, and the updates reflect in real-time across all active sessions. I used React, CodeMirror, Socket.IO, and Node.js (Express) to make it happen.

👨‍💻 Why I Built It
As a Computer Science student passionate about full-stack development, I wanted to explore how tools like Google Docs or VS Code Live Share work behind the scenes. This project gave me the chance to build something from scratch that combines real-time WebSocket communication, UI frameworks, and collaborative logic.

⚙️ Tech Stack & Software I Used
🧠 Frontend:
React.js – For building the UI.

CodeMirror – As the core code editor embedded in the React app.

Socket.IO Client – For establishing real-time communication with the backend.

🧠 Backend:
Node.js (Express) – Lightweight backend server to handle connections.

Socket.IO Server – To manage WebSocket connections, emit and broadcast messages.

CORS – To allow cross-origin communication between frontend and backend during development.

🛠️ Tools I Used:
VS Code – For coding and editing all project files.

Node.js & npm – For package management and running the development server.

PowerShell/Terminal – For executing commands and running backend/frontend servers.

Browser (Chrome) – For testing the collaborative tool using tabs or incognito sessions.

🧪 How I Built It (Step-by-Step)
1️⃣ Project Structure
I created a folder named collab-app which included:

mathematica
Copy
Edit
collab-app/
├── server/       ← Backend Node.js + Socket.IO
└── client/       ← Frontend React + CodeMirror
2️⃣ Setting Up the Backend
In the server folder:

I installed required packages:

bash
Copy
Edit
npm init -y
npm install express socket.io cors
Then I created index.js which:

Started an Express server

Used Socket.IO to listen for join-room, send-changes, and emit receive-changes

This made the backend responsible for syncing the code between users in real-time.

3️⃣ Setting Up the Frontend
In the client folder:

I used create-react-app to scaffold the app:

bash
Copy
Edit
npx create-react-app client
I installed:

bash
Copy
Edit
npm install codemirror@5 react-codemirror2 socket.io-client
I built a CodeMirror component and connected it to the backend using:

js
Copy
Edit
const socket = io("http://localhost:5000");
On each code change, the client emits changes to the backend, which then broadcasts them to all users in the same "room".

4️⃣ Running the Project
To run everything, I used two terminals:

In one terminal (backend):

bash
Copy
Edit
cd server
node index.js
In another terminal (frontend):

bash
Copy
Edit
cd client
npm start
Then I opened:

arduino
Copy
Edit
http://localhost:3000
In two different tabs or windows — typing in one updated the other instantly.

🔥 What I Learned
How WebSockets work using Socket.IO

How to manage real-time data flow in React

How CodeMirror integrates into modern frontend frameworks

The importance of consistent event naming and architecture

How to debug backend/frontend integration issues

Project folder structure & working with multiple servers

🧠 Future Improvements
Here’s what I plan to build on top of this:

Multiple rooms (like Google Docs links)

Usernames & presence indicators

Code persistence using MongoDB or Firebase

Authentication using Firebase/Auth0

Better UI with TailwindCSS or ShadCN

🌐 Conclusion
This project helped me gain confidence in full-stack real-time application development. It’s more than just a college assignment — it feels like something real I can build upon and showcase. I now understand what it takes to build apps like Google Docs, collaborative IDEs, or even multiplayer games.

If anyone wants to contribute or fork it, I’d love to open-source and collaborate!

##output

![Image](https://github.com/user-attachments/assets/17ede080-b59f-4c9f-9796-eed72ccd16b5)

![Image](https://github.com/user-attachments/assets/be1005bb-aa97-4226-a6b2-02ff462e0866)
