import React, { useState, useEffect } from "react";

function Home() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    async function getElements() {
      let elements = await fetch("http://localhost:3001/");
      elements = await elements.json();

      setElements(elements);
    }

    getElements();
  }, []);

  return (
    <div>
      {elements.map((element) => (
        <div key={element._id}>{element.content}</div>
      ))}
    </div>
  );
}

export default Home;
