import styles from "styles/layouts/UploadLayout.module.scss";
import Button from "components/Button";
import FileInput from "components/FileInput";
import TextInput from "components/TextInput";
import TextArea from "components/TextArea";
import Tag from "components/Tag";
import TagsIcon from "components/icons/TagsIcon";

export const UploadForm = ({
  handleFormSubmit,
  handleFormReset,
  handleUploadChange,
  activeTab,
  newUpload,
  setFilterMenuOpen,
}) => {
  return (
    <div className={`${styles["row"]} ${styles["form"]}`}>
      <form onSubmit={handleFormSubmit} onReset={handleFormReset}>
        {activeTab === "Image" ? (
          <div className={styles["group"]}>
            <FileInput
              id="image"
              inputFile={newUpload.image}
              accept="image/png"
              onChange={(e) => handleUploadChange(e, true)}
              label="Upload Image"
            />
          </div>
        ) : (
          <>
            <div className={styles["group"]}>
              <FileInput
                id="video"
                inputFile={newUpload.video}
                accept="video/mp4"
                onChange={(e) => handleUploadChange(e, true)}
                label="Upload Video"
              />
            </div>
            <div className={styles["group"]}>
              <FileInput
                id="thumbnail"
                inputFile={newUpload.thumbnail}
                accept="image/png"
                onChange={(e) => handleUploadChange(e, true)}
                label="Upload Video Thumbnail"
              />
            </div>
          </>
        )}
        <div className={styles["group"]}>
          <label htmlFor="title">Title</label>
          <TextInput
            onChange={handleUploadChange}
            value={newUpload.title}
            id="title"
          />
        </div>
        <div className={styles["group"]}>
          <label htmlFor="description">
            Description <small>(Optional)</small>
          </label>
          <TextArea
            onChange={handleUploadChange}
            value={newUpload.description}
            id="description"
          />
        </div>
        <div className={styles["group"]}>
          <label htmlFor="tags">
            Tags <small>(Optional)</small>
          </label>
          <div className={styles["tags"]}>
            {newUpload.tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
          <Button
            fullWidth
            label="Choose Tags"
            startIcon={<TagsIcon />}
            variant="secondary"
            onClick={() => setFilterMenuOpen(true)}
          />
        </div>
        <Button label="Submit Post" variant="primary" fullWidth type="submit" />
      </form>
    </div>
  );
};
