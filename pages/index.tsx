import styles from "./index.module.css"
import Description from "../cards/description/Description"
import Display from "../cards/display/Display"
import Map from "../cards/map/Map"
import Others from "../cards/others/Others"
import Button from "../components/buttons/button"

export default function Home() {
  return (
    <div className={styles.container}>
      <Button />
      <Display />
      <Map />
      <Description />
      <Others />
    </div>
  )
}
