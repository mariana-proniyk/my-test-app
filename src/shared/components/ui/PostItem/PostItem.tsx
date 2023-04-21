import { useEffect, useState } from "react";
import { CommentItemType, PostItemType } from "../../../types";

import styles from "./PostItem.module.scss";
import clsx from "clsx";
import { CommentItem } from "../CommentItem/CommentItem";
import { api } from "../../../../api";
import { Button } from "@mui/material";

type PostItemProps = {
	data: PostItemType;
};

export const PostItem: React.FC<PostItemProps> = ({ data }) => {
	const [isActive, setIsActive] = useState(false);
	const [comments, setComments] = useState<null | CommentItemType[]>(null);

	const clickOnText = () => {
		setIsActive(!isActive);
	};

	useEffect(() => {
		if (isActive && comments === null) {
			api.commentService
				.getCommentByPostId(data.id)
				.then((data) => setComments(data));
		}
	}, [isActive, comments, data.id]);

	return (
		<div
			className={clsx(styles.root, {
				[styles["is-active"]]: isActive,
			})}
		>
			<div>
				<h3 className={styles.title}>{data.title}</h3>
				<p className={styles.body}>{data.body}</p>
			</div>
			<Button className={styles.button} variant="text" onClick={clickOnText}>
				Show Comments
			</Button>
			<CommentItem
				className={styles["comment-wrapper"]}
				data={comments}
			></CommentItem>
		</div>
	);
};
