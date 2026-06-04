import { useAuthStore } from "@/store/authStore";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  const isAuth = useAuthStore((state) => state.isAuth);

  if (isAuth) {
    return <Redirect href="/(home)/home" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
