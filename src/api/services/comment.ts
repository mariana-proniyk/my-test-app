import { ApiUrl } from "../constants";

const getCommentByPostId = async (postId: number) => {
	return (await fetch(`${ApiUrl}/comments?postId=${postId}`)).json();
};

export const commentService = {
	getCommentByPostId,
};
