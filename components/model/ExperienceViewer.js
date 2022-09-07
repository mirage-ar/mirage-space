import "@google/model-viewer";

const ExperienceViewer = ({ contractAddress }) => (
  <div id="experienceCard">
    <model-viewer
        id="experience"
      src={`/experience/models/${contractAddress}.glb`}
      ios-src={`/experience/models/${contractAddress}.usdz`}
      poster={`/experience/images/${contractAddress}.png`}
      alt="Mirage 3D Model"
      camera-controls
      auto-rotate
      ar
    ></model-viewer>
  </div>
);

export default ExperienceViewer;
