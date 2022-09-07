import { useRouter } from "next/router";
import ExperienceViewer from "../../components/model/ExperienceViewer";

const Experience: React.FC = () => {
  const router = useRouter();
  const { contract } = router.query;

  return (
    <div>
      <ExperienceViewer contractAddress={contract} />
    </div>
  );
};

export default Experience;
