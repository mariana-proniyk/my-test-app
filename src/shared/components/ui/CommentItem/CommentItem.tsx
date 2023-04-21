import clsx from "clsx";
import { CommentItemType } from "../../../types";
import styles from "./CommentItem.module.scss";

type CommentItemProps = {
	className?: string;
	data: CommentItemType[] | null;
};

export const CommentItem: React.FC<CommentItemProps> = ({
	className,
	data,
}) => {
	if (data === null) return null;

	console.log(data);

	return (
		<>
			{data.map((item) => (
				<div className={clsx(styles.root, className)}>
					<h4>{item.email}</h4>
					<p>{item.body}</p>
				</div>
			))}
		</>
	);
};
