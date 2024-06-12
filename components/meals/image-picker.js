"use client";
import { useRef } from "react";
import styles from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const imageInputRef = useRef();
  const handlePickClick = () => {
    imageInputRef.current.click();
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
        />
        <button
          className={styles.button}
          onClick={handlePickClick}
          type="button"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
