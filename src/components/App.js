import Gallery from "./Gallery";
import Header from "./Header";
import Displayer from "./Displayer";
import { useState } from "react";
import "../App.css";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSelectImage = (img) => {
    setSelectedImage(img);
  };

  return (
    <div className="App">
      <Header></Header>
      <Displayer imgSrc={selectedImage}></Displayer>
      <Gallery onSelectImage={handleSelectImage} />
    </div>
  );
}

export default App;
