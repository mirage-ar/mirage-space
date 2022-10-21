/**----------------------------------------------------------------------------------
 * Full Size 3D models used for secondary markets
 * Mirage (( v1.0 ))
 * @author max <max@mirage.space> | October 21, 2022 | Updated:
 * ----------------------------------------------------------------------------------*/

import "@google/model-viewer";

const ExperienceViewer = ({ contractAddress }) => {

  const formattedAddress = contractAddress.toLowerCase();
  
  return (
  
  <div id="experienceCard">
    <model-viewer
        id="experience"
      src={`/meta/models/${formattedAddress}.glb`}
      ios-src={`/meta/models/${formattedAddress}.usdz`}
    //   poster={`/experience/images/${contractAddress}.png`}
      alt="Mirage 3D Model"
      camera-controls
      auto-rotate
      ar
      interaction-prompt="none"
    ><div slot="poster"></div></model-viewer>
  </div>
)};

export default ExperienceViewer;
