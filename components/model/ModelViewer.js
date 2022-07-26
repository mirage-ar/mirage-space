/**----------------------------------------------------------------------------------
 * The Model Viewer Used to Render 3D Assets on Web
 * Mirage (( v1.0 ))
 * @author max <max@mirage.space> | October 21, 2022 | Updated:
 * ----------------------------------------------------------------------------------*/

import "@google/model-viewer";

const ModelViewer = ({ assetUri }) => (
  <div id="card">
    <model-viewer
      src={`/assets/models/${assetUri}.glb`}
      ios-src={`/assets/models/${assetUri}.usdz`}
      // poster={`/assets/images/${assetUri}.png`}
      alt="Mirage 3D Model"
      camera-controls
      auto-rotate
      ar
      interaction-prompt="none"
      field-of-view="40deg"
      loading="eager"
      // style="background-color: unset;"
    >
      <div background-color="black" height="0px" slot="poster"></div>
    </model-viewer>
  </div>
);

export default ModelViewer;
