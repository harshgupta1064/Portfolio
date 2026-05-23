export const projects = [
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
