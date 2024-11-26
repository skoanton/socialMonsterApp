import { FlatList, StyleSheet } from "react-native";
import PostCard from "./PostCard";
import { useEffect, useState } from "react";
import { Post } from "../types/posts";
import { fetchPosts } from "../api/posts";

type FeedListProps = {};

export default function FeedList({}: FeedListProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const getPosts = async () => {
      const response = await fetchPosts();
      if (response) {
        setPosts(response);
      } else {
        console.error("Error fetching posts");
      }
    };
    getPosts();
  }, []);

  return (
    <>
      <FlatList
        style={style.list}
        data={posts}
        renderItem={({ item }) => <PostCard post={item} />}
      />
    </>
  );
}

const style = StyleSheet.create({
  list: {
    width: "100%",
  },
});
