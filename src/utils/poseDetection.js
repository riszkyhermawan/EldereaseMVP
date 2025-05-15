import * as poseDetection from "@tensorflow-models/pose-detection";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl";

let detector;

export async function initDetector() {
  await tf.setBackend("webgl");
  await tf.ready();

  detector = await poseDetection.createDetector(
    poseDetection.SupportedModels.MoveNet,
    {
      modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING,
    }
  );
}

function drawLine(ctx, a, b, color) {
  ctx.beginPath();
  ctx.moveTo(a.x, a.y);
  ctx.lineTo(b.x, b.y);
  ctx.lineWidth = 4;
  ctx.strokeStyle = color;
  ctx.stroke();
}

function drawKeypointsAndSkeleton(ctx, keypoints, color = "red") {
  const adjacentPairs = poseDetection.util.getAdjacentPairs(
    poseDetection.SupportedModels.MoveNet
  );
  for (const [i, j] of adjacentPairs) {
    const kp1 = keypoints[i];
    const kp2 = keypoints[j];
    if (kp1.score > 0.5 && kp2.score > 0.5) {
      drawLine(ctx, kp1, kp2, color);
    }
  }
}

export async function detectPose(
  video,
  canvas,
  onPoseDetected = () => {},
  poseDetected = false
) {
  if (!video || !canvas || !detector) return;

  // Wait until video has width and height
  if (video.readyState < 2) {
    await new Promise((resolve) => {
      video.onloadeddata = () => resolve();
    });
  }

  const ctx = canvas.getContext("2d");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  async function poseLoop() {
    if (!detector) return;

    const poses = await detector.estimatePoses(video);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    if (poses.length > 0) {
      const keypoints = poses[0].keypoints;
      drawKeypointsAndSkeleton(ctx, keypoints, poseDetected ? "green" : "red");
      onPoseDetected(poses[0]);
    }

    requestAnimationFrame(poseLoop);
  }

  poseLoop();
}
