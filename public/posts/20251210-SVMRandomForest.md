---
title: "Image Classification on Tiny ImageNet: A PCA + SVM vs. Random Forest Comparison"
date: 2025/12/10
tags: [ML]
excerpt: "A small-scale image classification project using the Tiny ImageNet-200 dataset to compare two classic machine learning models—Support Vector Machine (SVM) and Random Forest, using PCA for dimensionality reduction and minimal image preprocessing."
---

# Image Classification on Tiny ImageNet: A PCA + SVM vs. Random Forest Comparison

In this post, I walk through a small-scale image classification project using the **Tiny ImageNet-200** dataset. The goal was to compare two classic machine learning models—**Support Vector Machine (SVM)** and **Random Forest**—on a reduced version of the dataset, using **PCA for dimensionality reduction** and minimal image preprocessing.

---

## 📁 Dataset & Preprocessing

I used **Tiny ImageNet-200**, which contains 200 object classes. To keep things manageable, I limited the experiment to **5 classes** and **300 images per class** (1500 images total).

Each image was:
- Resized to **32×32 pixels**
- Converted to RGB
- Flattened into a **3072-dimensional vector** (32 × 32 × 3)
- Normalized to [0, 1]

The data was split **80/20** into training and test sets.

---

## 🔧 Pipeline Overview

1. **Load images** and labels using PIL and custom mapping from WordNet IDs.
2. **Apply PCA** to reduce dimensions from 3072 to 200 (retaining ~95% variance).
3. **Train two classifiers**:
   - **SVM** with RBF kernel (`C=10`, `gamma='scale'`)
   - **Random Forest** (200 trees, `max_depth=20`)
4. **Evaluate** on the test set using accuracy.

---

## 📊 Results

| Model | Accuracy |
|--------|-----------|
| SVM | **0.55** |
| Random Forest | **0.46** |

Both models performed modestly, with SVM slightly ahead.

---

## 📉 Why Are Accuracies So Low?

1. **Limited Data Representation**
   - Images were flattened into pixel vectors, losing all spatial structure.
   - No convolutional features or local descriptors were used.

2. **Small Dataset Size**
   - Only 5 classes and 300 samples per class were used.
   - This is tiny compared to the original dataset (200 classes, ~500K images).

3. **High Dimensionality Even After PCA**
   - Although PCA reduced dimensions to 200, the feature space is still abstract and may not capture discriminative patterns well.

4. **Model Limitations**
   - SVM with RBF kernel struggles with high-dimensional, non-linear image data without careful tuning.
   - Random Forest tends to work better with structured features rather than raw pixels.

5. **Minimal Preprocessing**
   - No augmentation, no edge detection, no color histograms—just raw pixels.
   - This keeps the project simple but limits performance.

---

## 🧠 Key Takeaways

- **PCA helps** reduce computation and noise, but it’s not enough for complex image recognition.
- **Classic ML models** like SVM and Random Forest can still achieve >50% accuracy on multi-class image tasks with minimal features.
- For better performance, consider:
  - Using **deep learning (CNNs)**
  - Extracting **handcrafted features** (HOG, SIFT)
  - Increasing **dataset size and diversity**
  - Applying **data augmentation**



---

*This project was part of a final course assignment in Machine Learning, focusing on learning algorithms rather than feature engineering. Even with simple tools, it’s possible to build a baseline image classifier—and learn why modern deep learning approaches dominate the field.*