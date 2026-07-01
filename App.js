import React, { useEffect, useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import io from "socket.io-client";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/javascript/javascript";

// ✅ Connect to your backend
const socket = io("http://localhost:5000");

function App() {
  const [code, setCode] = useState("// Start typing...");

  useEffect(() => {
    // ✅ Join a room (can be extended later for multi-room support)
    socket.emit("join-room", "global");

    // ✅ Listen for incoming changes from other users
    socket.on("receive-changes", (newCode) => {
      setCode(newCode);
    });

    // 🧼 Clean up socket listener on unmount
    return () => {
      socket.off("receive-changes");
    };
  }, []);

  // ✅ Handle typing and broadcast to others
  const handleChange = (editor, data, value) => {
    setCode(value);
    socket.emit("send-changes", { roomId: "global", code: value });
  };

  return (
    <div>
      <h2>💻 Real-Time Code Editor</h2>
      <CodeMirror
        value={code}
        options={{
          mode: "javascript",
          theme: "dracula",
          lineNumbers: true,
        }}
        onBeforeChange={handleChange}
      />
    </div>
  );
}

export default App;
