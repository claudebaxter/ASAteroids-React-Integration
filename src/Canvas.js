import React, { useEffect } from 'react';

const Canvas = () => {

  useEffect(() => {
    const handleMessage = (event) => {
      const { type, score } = event.data;
      if (type === 'PLAYER_SCORE') {
        console.log('Received score:', score);
        // Handle the received score in your React component
        // You can set the score state or perform other logic here
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
          <iframe
            src="https://claudebaxter.github.io/canvas-game/"
            title="ASAteroids"
            width="100%"
            height="100%"
          />
        </div>
      );
}

export default Canvas