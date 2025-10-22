import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native"
import { useLocalSearchParams } from "expo-router"
import posts from "../../../../assets/data/posts.json"
import PostListItem from "../../../components/PostListItem"
import Comments from "../../../../assets/data/comments.json"
import CommentListItem from "../../../components/CommentListItem"
import { useState } from "react"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const DetailedPost = () => {
  const { id } = useLocalSearchParams()
  const [comment, setComment] = useState<string>("")
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false)
  const detailedPost = posts.find((post) => post.id == id)

  const insets = useSafeAreaInsets()

  const postComments = Comments.filter((comment) => comment.post_id == "post-1")

  if (!detailedPost) {
    return <Text>Post Not Found</Text>
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
      keyboardVerticalOffset={insets.top + 10}
    >
      <FlatList
        ListHeaderComponent={
          <PostListItem post={detailedPost} isDetailedPost />
        }
        data={postComments}
        renderItem={({ item }) => (
          <CommentListItem
            comment={item}
            depth={0}
            handleReplyPress={() => {}}
          />
        )}
      />
      <View
        style={{
          paddingBottom: insets.bottom,
          paddingHorizontal: 10,
          borderBottomColor: "lightgrey",
          backgroundColor: "white",
          borderRadius: 10,
        }}
      >
        <TextInput
          placeholder="Add a comment"
          value={comment}
          onChangeText={setComment}
          style={{ backgroundColor: "#E4E4E4", padding: 5, borderRadius: 5 }}
          multiline
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
        />
        {isInputFocused && (
          <Pressable
            style={{
              backgroundColor: "#115BCA",
              borderRadius: 15,
              marginLeft: "auto",
              marginTop: 15,
            }}
          >
            <Text
              style={{
                color: "white",
                paddingVertical: 5,
                paddingHorizontal: 10,
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              Reply
            </Text>
          </Pressable>
        )}
      </View>
    </KeyboardAvoidingView>
  )
}

export default DetailedPost

const styles = StyleSheet.create({})
