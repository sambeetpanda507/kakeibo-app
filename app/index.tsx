import HeroImg from "@/assets/images/hero.svg";
import Button from "@/components/ui/Button";
import useTheme from "@/hooks/use-theme";
import { typography } from "@/theme/typography";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const theme = useTheme();

  const handleLoginPress = () => {
    router.push("/(auth)/login");
  };

  const handleGetStartedPress = () => {
    router.push("/(auth)/signup");
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

      <Button fullWidth style={styles.primaryButton} onPress={handleGetStartedPress}>
        Get Started
      </Button>
      <Button variant="ghost" fullWidth onPress={handleLoginPress} style={styles.secondaryButton} textStyle={styles.secondaryLabel}>
        Login
      </Button>
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
    fontWeight: "700",
  },
  message: {
    fontSize: typography.fontSize.md,
    lineHeight: typography.lineHeight.md,
    fontWeight: "400",
  },
  heroWrapper: {
    width: "100%",
    maxWidth: 320,
    aspectRatio: 1,
  },
  primaryButton: {
    width: 300,
    marginTop: 30,
  },
  secondaryButton: {
    marginTop: 10,
  },
  secondaryLabel: {
    fontSize: typography.fontSize.md,
    lineHeight: typography.lineHeight.md,
    fontWeight: "400",
  },
});
