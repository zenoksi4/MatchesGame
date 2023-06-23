import { useState } from "react";
import SettingsButton from "./components/SettingsButton";
import ContentWrapper from "./components/ContentWrapper";
import SettingsModal from "./components/SettingsModal";
import MatchGame from "./components/MatchGame";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [numMatch, setNumMatch] = useState(12);
  const [maxTake, setMaxTake] = useState(3);
  const [mod, setMod] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ContentWrapper>
      <SettingsButton openModal={openModal} />

      <MatchGame numMatch={numMatch} mod={mod} maxTake={maxTake} />

      {isModalOpen && (
        <SettingsModal
          closeModal={closeModal}
          numMatch={numMatch}
          setNumMatch={setNumMatch}
          maxTake={maxTake}
          setMaxTake={setMaxTake}
          mod={mod}
          setMod={setMod}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </ContentWrapper>
  );
}

export default App;
