import HeroImg from "@/assets/images/hero.svg";
import useTheme from "@/hooks/use-theme";
import { typography } from "@/theme/typography";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const theme = useTheme();

  const handleLoginPress = () => {
    router.push("/login");
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.primary }]}>Kakeibo</Text>
      <Text style={[styles.message, { color: theme.text }]}>Mindful spending.</Text>
      <Text style={[styles.message, { color: theme.text }]}>A better life.</Text>

      {/* Image will appear here */}
      <View style={styles.heroWrapper}>
        <HeroImg height={"100%"} width={"100%"} />
      </View>

      <Text style={[styles.message, { color: theme.text }]}>The Japaneese way to</Text>
      <Text style={[styles.message, { color: theme.text }]}>manage your money with</Text>
      <Text style={[styles.message, { color: theme.text }]}>purpose and clarity</Text>

      <Pressable style={[styles.capsuleButton, { backgroundColor: theme.primary }]}>
        <Text style={[styles.message, styles.getStarted]}>Get Started</Text>
      </Pressable>
      <Pressable onPress={handleLoginPress}>
        <Text style={[styles.message, { color: theme.primary, marginTop: 10 }]}>Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    fontFamily: "Nunito",
    fontWeight: 700,
  },
  message: {
    fontSize: typography.fontSize.md,
    lineHeight: typography.lineHeight.md,
    fontWeight: 400,
  },
  heroWrapper: {
    width: "100%",
    maxWidth: 320,
    aspectRatio: 1,
  },
  capsuleButton: {
    borderRadius: 50,
    padding: 10,
    width: 300,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  getStarted: {
    color: "white",
  },
});
