import { useRef } from "react";
import styles from "styles/FileInput.module.scss";
import Button from "./Button";
import UploadIcon from "./icons/UploadIcon";

const FileInput = ({
  id,
  inputFile,
  multiple,
  accept,
  onChange,
  label,
  required,
}) => {
  const inputRef = useRef(null);
  return (
    <label htmlFor={id} className={styles["container"]}>
      {label}
      {inputFile && (
        <div className={styles["preview"]}>
          <img src={URL.createObjectURL(inputFile)} />
        </div>
      )}
      <input
        ref={inputRef}
        type="file"
        id={id}
        name={id}
        multiple={multiple}
        accept={accept}
        onChange={onChange}
        required={required}
      />
      <Button
        label={label}
        text="uppercase"
        variant="outlined"
        onClick={() => inputRef.current.click()}
        rounded
        fullWidth
        startIcon={<UploadIcon />}
      />
    </label>
  );
};

export default FileInput;
