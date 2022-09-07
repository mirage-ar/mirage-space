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
    ><div background-color="black" height="0px" slot="poster"></div></model-viewer>
  </div>
);

export default ModelViewer;
