import { useState } from "react";
import BackDropModal from "./components/BackDropModal";

import Settings from "./components/SettingsButton";
import ContentWrapper from "./components/ContentWrapper";
import SettingsModal from "./components/SettingsModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ContentWrapper>
      <Settings openModal={openModal}/>
      {isModalOpen && <SettingsModal closeModal={closeModal}/>}
    </ContentWrapper>
  );
}

export default App;
