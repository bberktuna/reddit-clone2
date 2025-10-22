import { ClerkProvider } from "@clerk/clerk-expo"
import { Slot } from "expo-router"
import { tokenCache } from "@clerk/clerk-expo/token-cache"

// You need to replace this with your actual Clerk publishable key
// For now, using a placeholder to prevent the error
const publishableKey =
  process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY || "pk_test_placeholder_key"

export default function RootLayoutNav() {
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <Slot />
    </ClerkProvider>
  )
}
