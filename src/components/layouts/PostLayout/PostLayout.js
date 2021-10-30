import { useState } from "react";
import styles from "styles/layouts/PostLayout.module.scss";
import Layout from "components/Layout";
import ButtonGroup from "components/ButtonGroup";
import { PostImage } from "./PostImage";
import { PostStats } from "./PostStats";
import { PostTitle } from "./PostTitle";
import { PostTags } from "./PostTags";
import { PostAuthor } from "./PostAuthor";
import { DescriptionSection } from "./DescriptionSection";
import { CommentsSection } from "./CommentsSection";

const PostLayout = ({ post }) => {
  const [isCommentFieldOpen, setCommentFieldOpen] = useState(false);
  const [tabs] = useState(["Description", "Comments"]);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [newComment, setNewComment] = useState("");
  const handleNewCommentChange = (e) => setNewComment(e.target.value);
  const handleNewCommentSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Layout
      title="iFLEXHIBIT"
      description="A content sharing platform for iACADEMY students"
      canonical="https://iflexhibit.com/post"
    >
      <div className={styles["post"]}>
        <PostImage imgSrc={post?.image} alt={post?.title} />
        <PostStats
          likes_count={post?.statistics.likes}
          comments_count={post?.statistics.comments}
          views_count={post?.statistics.views}
        />
        <PostTitle title={post?.title} />
        <PostTags tags={post?.tags} />
        <PostAuthor
          avatar={post?.author?.avatar}
          displayName={post?.author?.username}
          realName={post?.user?.realName || null}
        />
        <div className={`${styles["row"]} ${styles["tabs"]}`}>
          <ButtonGroup
            tabs={tabs}
            active={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
        {activeTab === tabs[0] ? (
          <DescriptionSection description={post?.body} />
        ) : (
          <CommentsSection
            comments={[].reverse().map((c) => c)}
            isCommentFieldOpen={isCommentFieldOpen}
            setCommentFieldOpen={setCommentFieldOpen}
            newComment={newComment}
            handleNewCommentSubmit={handleNewCommentSubmit}
            handleNewCommentChange={handleNewCommentChange}
          />
        )}
      </div>
    </Layout>
  );
};

export default PostLayout;
