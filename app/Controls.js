import React, {useEffect} from 'react'
import { useControls } from 'react-zoom-pan-pinch';

const Controls = () => {
  useEffect(() => {
    const {zoomIn, zoomOut, resetTransform} = useControls();
      return (
      <>
        <button onClick={() => zoomIn()}>Zoom In</button>
        <button onClick={() => zoomOut()}>Zoom Out</button>
        <button onClick={() => resetTransform()}>Reset</button>
      </>
    );
});
  return (
    <div>

    </div>
  )
}

export default Controls