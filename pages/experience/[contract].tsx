import { useRouter } from "next/router";
import dynamic from 'next/dynamic'
import styles from "./experience.module.css"

const ExperienceViewer = dynamic(
    () => import('../../components/model/ExperienceViewer'),
    { ssr: false }
  )

const Experience: React.FC = () => {
  const router = useRouter();
  const { contract } = router.query;

  return (
    <div className={styles.container}>
      <ExperienceViewer contractAddress={contract} />
    </div>
  );
};

export default Experience;
