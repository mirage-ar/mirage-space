import React from "react"
import styles from "./index.module.css"
import Description from "../cards/description/Description"
import Display from "../cards/display/Display"
import Map from "../cards/map/Map"
import Others from "../cards/others/Others"
import Modal from "../components/modal/Modal"
import Button from "../components/buttons/button"

export default function Home() {
  const [isModalOpen, setModalState] = React.useState(false);

  const toggleModal = () => setModalState(!isModalOpen);

  return (
    <div className={styles.container}>
      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
      />
      <Button toggleModal={toggleModal}/>
      <Display />
      <Map />
      <Description toggleModal={toggleModal}/>
      <Others />
    </div>
  )
}
