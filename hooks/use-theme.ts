import { themes } from "@/theme";
import { useColorScheme } from "react-native";

const useTheme = () => {
  const colorScheme = useColorScheme();
  const scheme = colorScheme ?? "light";
  return themes[scheme];
};

export default useTheme;
