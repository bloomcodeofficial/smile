// const audioContext = new AudioContext();
// console.log(audioContext);

// // Audio buffer represent a certain duration of sound. It stores the amplitude value of the signal. The buffer below holds one second worth of audio data.
// const buffer = audioContext.createBuffer(1, audioContext.sampleRate * 1, audioContext.sampleRate);

// // Read the buffer data - below returns a float32 array where each item is a number representing the level of that sample
// const channelData = buffer.getChannelData(0);

// for (let i = 0; i < buffer.length; i++) {
//   channelData[i] = Math.random() * 2 - 1;
// }

// // To play the sound we have to create a buffer source, an audio node that takes our buffer and handles playing it for us
// const whiteNoiseSource = audioContext.createBufferSource();
// whiteNoiseSource.buffer = buffer;

// // Destination node is a special node that is attached directly to the audio context, it represnt whatever speakers that will play the sound

// const primaryGainControl = audio;

// // import { request } from '@playwright/test';

// // export const audioVisualizer = () => {
// //   window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;

// //   const startVisualizer = function (src, canvasID = 'audio-canvas') {
// //     const audioCtx = new AudioContext();
// //     audioCtx.crossOrigin = 'anonymous';
// //     const analyser = audioCtx.createAnalyser();
// //     const audioSrc = audioCtx.createMediaElementSource(src);

// //     audioSrc.connect(analyser);
// //     analyser.connect(audioCtx.destination);

// //     const canvas = document.getElementById(canvasID),
// //       cwidth = canvas.width,
// //       cheight = canvas.height,
// //       meterWidth = 10,
// //       capHeight = 2,
// //       meterNum = 600 / (10 + 2),
// //       capYPositionArray = [];
// //     audioCtx = canvas.getContext('2d');

// //     // Loop through array of frequency data and draw the bars on the canvas
// //     function draw() {
// //       const bufferLength = analyser.frequencyBinCount;
// //       // Uint8Array to hold the frequency data
// //       const dataArray = new Uint8Array(bufferLength);
// //       // Get the frequency data and put it into the array
// //       analyser.getByteFrequencyData(dataArray);
// //       // Calculate the size of each bar based on the number of bars we want to draw
// //       const step = Math.round(dataArray.length / meterNum);

// //       // Clear the canvas
// //       canvas.clearRect(0, 0, cwidth, cheight);

// //       // Set the stroke and fill style for the bars
// //       canvas.lineWidth = 2;
// //       canvas.strokeStyle = 'rgb(0,0,0,)';
// //       canvas.fillStyle = 'rgb(0,0,0,)';

// //       // Begin a new path on the canvas
// //       canvas.beginPath();
// //     }
// //   };
// // };
