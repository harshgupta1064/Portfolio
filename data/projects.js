export const projects = [
  {
    title: "Visual Servoing for Mobile Robot Goal Seeking",
    github: "https://github.com/harshgupta1064/robot-perception-and-navigation",
    video: "assets/projects/RobotObjectDetectionAndNavigation.mp4",
    description:
      "ROS2 perception and navigation stack for a simulated TurtleBot that finds a colored target in live camera feed, steers with proportional control, and approaches when aligned.",
    bullets: [
      "Two-node pipeline: OpenCV detector on /image_raw (HSV threshold, contours, centroid error) and a navigator subscribing to error and publishing cmd_vel.",
      "Gazebo simulation with a custom green sphere target; approach phase when horizontal error is small, stop when contour area indicates proximity.",
      "Recovery when the target leaves the frame—bias rotation toward the last-seen side, then timed search.",
    ],
    tags: ["ROS2", "OpenCV", "Gazebo", "TurtleBot3", "Computer Vision"],
    featured: true,
  },
  {
    title: "Driver Drowsiness Detection",
    github: "https://github.com/harshgupta1064/Drowsiness-Detection-System",
    description:
      "Real-time driver drowsiness detection using YOLOv8, OpenCV, and MediaPipe for eye closure and yawning from live video streams.",
    bullets: [
      "Trained dual YOLOv8 models on 53K+ images with GroundingDINO auto-labeling and custom data pipelines.",
      "Integrated PyQt5 GUI with confidence thresholding and alert mechanisms for deployment-ready performance.",
      "Validated models using TensorFlow/Keras alongside PyTorch-based training workflows.",
    ],
    tags: ["YOLOv8", "OpenCV", "MediaPipe", "PyQt5", "PyTorch"],
    featured: true,
  },
  {
    title: "Brain Tumor Segmentation (MRI)",
    github: "https://github.com/harshgupta1064/Brain-tumer-Classification",
    description:
      "Deep learning segmentation of brain tumors from MRI scans using the U-Net architecture.",
    bullets: [
      "Preprocessed Kaggle LGG Brain MRI dataset with augmentation and normalization.",
      "Achieved Dice coefficient of 0.83 and IoU of 0.76 on the test set.",
      "Enhanced interpretability with Grad-CAM; deployed demo via Streamlit.",
    ],
    tags: ["U-Net", "PyTorch", "Streamlit", "Grad-CAM", "Medical Imaging"],
    featured: true,
  },
];
