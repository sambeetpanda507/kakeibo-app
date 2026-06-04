import { useAuthStore } from "@/store/authStore";
import { Redirect, Stack } from "expo-router";

export default function HomeLayout() {
  const isAuth = useAuthStore((state) => state.isAuth);

  if (!isAuth) {
    return <Redirect href="/" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
