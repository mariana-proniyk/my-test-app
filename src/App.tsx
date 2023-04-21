import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { api } from "./api";
import { PostItem } from "./shared/components/ui";
import { PostItemType } from "./shared/types";
import { Navigation, Scrollbar } from "swiper";

function App() {
	const [posts, setPosts] = useState<null | PostItemType[]>(null);

	useEffect(() => {
		api.postService.getAllPosts().then((result) => setPosts(result));
	}, []);

	if (!posts) return null;

	return (
		<Swiper
			modules={[Navigation, Scrollbar]}
			slidesPerView={3}
			scrollbar={{ draggable: true }}
		>
			{posts.map((i) => (
				<SwiperSlide key={i.id}>
					<PostItem data={i} />
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default App;
