import { ApiUrl } from "../constants";

const getAllPosts = async () => {
	return (await fetch(`${ApiUrl}/posts`)).json();
};

export const postService = {
	getAllPosts,
};
