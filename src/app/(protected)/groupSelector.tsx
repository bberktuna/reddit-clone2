import {
  FlatList,
  Text,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  View,
  TextInput,
  Image,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import groups from "../../../assets/data/groups.json"
import { AntDesign, MaterialIcons } from "@expo/vector-icons"
import { router } from "expo-router"
import { useState } from "react"

export default function GroupSelector() {
  const [searchValue, setSearchValue] = useState("")

  const filteredGroups = groups.filter((group) =>
    group.name.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 10 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <AntDesign
          name="close"
          size={30}
          color="black"
          onPress={() => router.back()}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
            flex: 1,
            paddingRight: 30,
          }}
        >
          Post to
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "lightgrey",
          borderRadius: 5,
          gap: 5,
          marginVertical: 10,
          alignItems: "center",
          paddingHorizontal: 5,
        }}
      >
        <MaterialIcons name="search" size={24} color="gray" />
        <TextInput
          placeholder="Search for a community"
          placeholderTextColor={"grey"}
          style={{ paddingVertical: 10, flex: 1 }}
          value={searchValue}
          onChangeText={(text) => setSearchValue(text)}
        />

        {searchValue && (
          <AntDesign
            name="close-circle"
            size={18}
            color="gray"
            onPress={() => setSearchValue("")}
          />
        )}
      </View>

      <FlatList
        style={{ marginTop: 10 }}
        data={filteredGroups}
        renderItem={({ item }) => (
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              marginBottom: 20,
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: 40, aspectRatio: 1, borderRadius: 20 }}
            />
            <Text style={{ fontWeight: "600" }}> {item.name} </Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  )
}
