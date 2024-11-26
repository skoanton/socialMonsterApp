import { Pressable, StyleSheet, Text, View } from "react-native";
import { Post } from "../types/posts";
import { useEffect, useState } from "react";
import { fetchMonsterById } from "../api/monsters";
import { Monster } from "../types/monsters";
import { Link } from "expo-router";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  const [author, setAuthor] = useState<Monster | null>(null);
  useEffect(() => {
    const getAuthor = async () => {
      const response = await fetchMonsterById(post.authorId);
      if (response) {
        setAuthor(response);
      } else {
        console.error("Error fetching author");
      }
    };
    getAuthor();
  }, []);

  return (
    <>
      <View style={styles.container}>
        {author ? (
          <Link href={"#"}>
            <Text style={[styles.text, styles.header]}>{author.name}</Text>
          </Link>
        ) : (
          <Text style={[styles.text, styles.header]}>NaN</Text>
        )}
        <Text style={[styles.text, styles.title]}>{post.title}</Text>
        <Text style={[styles.text, styles.post]}>{post.text}</Text>
        <View style={styles.flex}>
          <Pressable>
            <Text style={styles.text}>Like</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.text}>Comment</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    padding: 20,
    marginBottom: 20,
  },
  text: {
    color: "white",
  },
  header: {
    fontSize: 14,
  },
  title: {
    fontSize: 24,
  },
  post: {
    fontSize: 16,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
