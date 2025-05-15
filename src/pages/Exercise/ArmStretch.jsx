import { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam"; // Uncomment if you want webcam instead of video placeholder
import { initDetector, detectPose } from "../../utils/poseDetection";

const ArmStretch = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [poseDetected, setPoseDetected] = useState(false);

  useEffect(() => {
    const setupPoseDetection = async () => {
      await initDetector();
      detectPose(
        webcamRef.current?.video,
        canvasRef.current,
        (pose) => {
          console.log("Detected Pose:", pose);

          if (pose && pose.keypoints) {
            const rightWrist = pose.keypoints.find(
              (k) => k.name === "right_wrist"
            );
            const rightElbow = pose.keypoints.find(
              (k) => k.name === "right_elbow"
            );

            if (
              rightWrist &&
              rightElbow &&
              rightWrist.y < rightElbow.y &&
              !poseDetected
            ) {
              setPoseDetected(true);
              console.log("Right arm stretched upward detected!");

              setTimeout(() => setPoseDetected(false), 3000);
            }
          }
        },
        poseDetected // Pass poseDetected to control line color
      );
    };
    setupPoseDetection();
  }, [poseDetected]);

  // Debug: Check webcam stream
  useEffect(() => {
    if (webcamRef.current && webcamRef.current.video) {
      console.log("Webcam video element found", webcamRef.current.video);
      if (webcamRef.current.video.srcObject) {
        console.log("Webcam stream active");
      } else {
        console.log("No webcam stream");
      }
    }
  }, []);

  return (
    <div className="w-screen bg-lavender-mist flex flex-col justify-center items-center m-auto font-display pb-24">
      <div className="w-screen h-screen overflow-hidden fixed -z-10">
        <div className="w-[1477px] h-[1477px] left-[169px] top-[-342px] absolute bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(149,252,202,0.31)_0%,rgba(237,235,250,0.31)_100%)] rounded-full" />
        <div className="w-[1477px] h-[1477px] left-[-747px] top-[512px] absolute bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(149,252,202,0.31)_0%,rgba(237,235,250,0.31)_100%)] rounded-full" />
      </div>

      <div className="w-[1169px] inline-flex flex-col justify-center items-center gap-14 mt-12">
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <div className="inline-flex justify-start items-center gap-3.5">
            <div className="p-2 bg-light-green rounded-lg flex justify-start items-center gap-24">
              <img
                className="w-9 h-9"
                src="/Icon/ExerciseNow.svg"
                alt="Exercise Icon"
              />
            </div>
            <div className="justify-start text-forest-green text-6xl font-bold">
              Exercise: Squat
            </div>
          </div>

          <div className="inline-flex justify-start items-center gap-12">
            <img
              className="w-[567px] h-[522px] rounded-lg"
              src="/image/armStretch.png"
              alt="Arm Stretch Illustration"
            />

            {/* Camera Section */}
            <div className="w-[536px] h-[522px] relative bg-light-green rounded-lg overflow-hidden flex justify-center items-center">
              {/* Webcam */}
              <Webcam
                ref={webcamRef}
                mirrored={true}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  borderRadius: "12px",
                  border: "3px solid red", // debug border
                }}
              />
              <canvas
                ref={canvasRef}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 10,
                }}
              />
              {/* Overlay message removed to avoid blocking webcam */}
              {/* {!poseDetected && (
                <div className="absolute inset-0 flex justify-center items-center bg-light-green bg-opacity-80 rounded-lg text-forest-green text-4xl font-bold z-20">
                  Open Your Camera to Start Exercise
                </div>
              )} */}
              {/* Placeholder video if not using webcam */}
              {/* <video
                className="w-full h-full object-cover rounded-lg"
                autoPlay
                muted
                loop
                playsInline
                src="/video/placeholder_squat.mp4"
                poster="/image/video_placeholder.png"
              /> */}
            </div>
          </div>

          <div className="inline-flex justify-start items-end gap-8">
            <div className="w-[905px] h-44 p-4 bg-light-green rounded-xl inline-flex flex-col justify-center items-start gap-4">
              <div className="text-forest-green text-4xl font-bold">
                Audio Caption:
              </div>
              <div className="text-forest-green text-2xl font-normal font-['Open_Sans']">
                Start with your hands open
              </div>
            </div>

            <div className="w-56 p-4 bg-light-green rounded-xl inline-flex flex-col justify-center items-center gap-4">
              <div className="w-24 h-24 relative bg-white/0 overflow-hidden">
                <div className="w-20 h-16 left-[8.33px] top-[19.53px] absolute outline outline-[5px] outline-offset-[-2.5px] outline-forest-green" />
              </div>
              <div className="text-center text-forest-green text-2xl font-normal font-['Open_Sans']">
                Voice Guide
              </div>
            </div>
          </div>

          <div className="self-stretch inline-flex justify-start items-start gap-12">
            <div className="w-[568px] p-4 bg-light-green rounded-xl flex flex-col gap-4">
              <div className="text-forest-green text-4xl font-bold">Tips:</div>
              <div className="text-forest-green text-2xl font-normal font-['Open_Sans']">
                Start slow, small movements.
                <br />
                Use a chair or wall for balance.
                <br />
                Keep feet shoulder-width apart.
                <br />
                Chest up, look forward.
                <br />
                Lower like sitting in a chair (not too deep at first).
                <br />
                Knees over ankles.
              </div>
            </div>

            <div className="w-[552px] p-4 bg-light-green rounded-xl flex flex-col gap-4">
              <div className="text-forest-green text-4xl font-bold">
                Benefits:
              </div>
              <div className="text-forest-green text-2xl font-normal font-['Open_Sans']">
                Stronger legs for walking.
                <br />
                Better balance to prevent falls.
                <br />
                Easier to get in and out of chairs.
                <br />
                Stronger bones.
                <br />
                Better blood flow.
                <br />
                Healthier joints.
              </div>
            </div>
          </div>
        </div>

        <div className="h-20 px-6 py-4 bg-forest-green rounded-lg inline-flex justify-center items-center gap-6">
          <div className="text-violet-100 text-4xl font-bold">
            Next Exercise
          </div>
          <div className="p-2.5 bg-white rounded-full flex items-center">
            <div className="w-6 h-6 relative bg-white/0 overflow-hidden">
              <div className="w-3 h-3 left-[5.64px] top-[5.64px] absolute outline outline-2 outline-offset-[-1px] outline-forest-green" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArmStretch;
