import useTheme from "@/hooks/use-theme";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const theme = useTheme();
  const [fontsLoaded] = useFonts({
    Nunito: require("../assets/fonts/Nunito-VariableFont_wght.ttf"),
    NunitoItalics: require("../assets/fonts/Nunito-Italic-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
