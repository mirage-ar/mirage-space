import "@google/model-viewer";

const ModelViewer = () => (
  <div id="card">
    <model-viewer
      src="/assets/models/head.glb"
      ios-src=""
      poster="/assets/images/head.png"
      alt="Mirage 3D Model"
      camera-controls
      auto-rotate
      ar
    ></model-viewer>
  </div>
);

export default ModelViewer;
