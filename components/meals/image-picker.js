"use client";
import { useRef, useState } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickImage, setPickImage] = useState();

  const imageInputRef = useRef();
  const handlePickClick = () => {
    imageInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => setPickImage(fileReader.result);

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickImage && <p>No image picked yet</p>}
          {pickImage && (
            <Image src={pickImage} alt="The image slected by the user" fill />
          )}
        </div>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
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
