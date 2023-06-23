import { useState } from "react";
import Settings from "./components/SettingsButton";
import ContentWrapper from "./components/ContentWrapper";
import SettingsModal from "./components/SettingsModal";
import MatchGame from "./components/MatchGame";
import PlayerInput from "./components/PlayerInput";

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

      <MatchGame/>

      <PlayerInput/>
      {isModalOpen && <SettingsModal closeModal={closeModal}/>}
    </ContentWrapper>
  );
}

export default App;
