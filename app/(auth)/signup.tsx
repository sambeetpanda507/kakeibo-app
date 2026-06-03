import Apple from "@/assets/icons/apple";
import ChevronLeft from "@/assets/icons/chevron-left";
import Envolope from "@/assets/icons/envolope";
import Eye from "@/assets/icons/eye";
import Google from "@/assets/icons/google";
import Lock from "@/assets/icons/lock";
import User from "@/assets/icons/user";
import HeroImg from "@/assets/images/hero.svg";
import AppText from "@/components/ui/app-text";
import Button from "@/components/ui/Button";
import useTheme from "@/hooks/use-theme";
import { typography } from "@/theme/typography";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

function Signup() {
  const theme = useTheme();
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [agreedToTerms, setAgreedToTerms] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const handleBack = () => {
    router.back();
  };

  const handleShowVisible = () => {
    setShowPassword((prev) => !prev);
  };

  const handleShowConfirmVisible = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleToggleTerms = () => {
    setAgreedToTerms((prev) => !prev);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Back button */}
      {/* --- Back button --- */}
      <View style={styles.backBtn}>
        <Button variant="ghost" onPress={handleBack} fullWidth={false} style={styles.backButton}>
          <ChevronLeft height={20} width={20} color={theme.text} />
        </Button>
      </View>

      <View style={styles.innerContainer}>
        {/* Illustrator image */}
        <View style={styles.heroWrapper}>
          {/* TODO: update this image to a different one */}
          <HeroImg height={"100%"} width={"100%"} />
        </View>

        {/* Headline */}
        <Text style={[styles.title, { color: theme.primary }]}>Create Account</Text>

        {/* Subheading */}
        <Text style={[styles.message, { color: theme.text }]}>Start your mindful money journey</Text>

        {/* Text fields */}
        <View style={{ width: "100%" }}>
          {/* --- Full name --- */}
          <View style={[styles.input, { borderColor: theme.text }]}>
            <User height={18} width={18} color={theme.text} />
            <TextInput
              style={[styles.textInput, { color: theme.text }]}
              placeholder="Full Name"
              placeholderTextColor={theme.text}
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

          {/* --- Email --- */}
          <View style={[styles.input, { borderColor: theme.text }]}>
            <Envolope height={18} width={18} color={theme.text} />
            <TextInput
              style={[styles.textInput, { color: theme.text }]}
              keyboardType="email-address"
              placeholder="Email"
              placeholderTextColor={theme.text}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* --- Password --- */}
          <View style={[styles.input, { borderColor: theme.text }]}>
            <Lock height={18} width={18} color={theme.text} />
            <TextInput
              style={[styles.textInput, { color: theme.text }]}
              secureTextEntry={!showPassword}
              placeholder="Password"
              placeholderTextColor={theme.text}
              value={password}
              onChangeText={setPassword}
            />
            <Pressable onPress={handleShowVisible}>
              <Eye height={18} width={18} color={theme.text} />
            </Pressable>
          </View>

          {/* --- Confirm password --- */}
          <View style={[styles.input, { borderColor: theme.text }]}>
            <Lock height={18} width={18} color={theme.text} />
            <TextInput
              style={[styles.textInput, { color: theme.text }]}
              secureTextEntry={!showConfirmPassword}
              placeholder="Confirm Password"
              placeholderTextColor={theme.text}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <Pressable onPress={handleShowConfirmVisible}>
              <Eye height={18} width={18} color={theme.text} />
            </Pressable>
          </View>
        </View>

        {/* Check box */}
        <Pressable
          accessibilityRole="checkbox"
          accessibilityState={{ checked: agreedToTerms }}
          hitSlop={8}
          pressRetentionOffset={8}
          style={styles.checkboxRow}
          onPress={handleToggleTerms}
        >
          <View
            style={[
              styles.checkbox,
              {
                borderColor: agreedToTerms ? theme.primary : theme.text,
                backgroundColor: agreedToTerms ? theme.primary : "transparent",
              },
            ]}
          >
            {agreedToTerms && <Text style={styles.checkboxTick}>✓</Text>}
          </View>
          <Text style={[styles.checkboxText, { color: theme.text }]}>
            I agree to <Text style={{ color: theme.primary }}>Terms</Text> & <Text style={{ color: theme.primary }}>Privacy Policy</Text>
          </Text>
        </Pressable>

        {/* Create account button */}
        <Button variant="primary" radius="subtle" style={styles.signupBtn}>
          Create Account
        </Button>

        {/* Divider */}
        <View style={styles.divider}>
          <View style={[styles.dividerLine, { backgroundColor: theme.text }]} />
          <AppText style={[styles.dividerText, { color: theme.text }]}>or</AppText>
          <View style={[styles.dividerLine, { backgroundColor: theme.text }]} />
        </View>

        <View style={{ marginTop: 50, width: "100%" }}>
          {/* Google OAuth button */}
          <Button
            radius="subtle"
            variant="outline"
            fullWidth
            leftIcon={<Google width={20} height={20} />}
            textStyle={{ color: theme.text }}
            style={[styles.googleBtn, { borderColor: theme.text }]}
          >
            Continue with Google
          </Button>

          {/* Apple OAuth button */}
          <Button
            textStyle={{ color: theme.text }}
            radius="subtle"
            variant="outline"
            fullWidth
            leftIcon={<Apple width={25} height={25} color={theme.text} />}
            style={[styles.appleBtn, { borderColor: theme.text }]}
          >
            Continue with Apple
          </Button>
        </View>

        {/* Login text */}
        <View style={styles.loginRow}>
          <AppText style={[styles.loginText, { color: theme.text }]}>Don&apos;t have an account?</AppText>
          <Pressable onPress={() => router.push("/(auth)/login")}>
            <AppText style={[styles.loginLink, { color: theme.primary }]}>Log In</AppText>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backBtn: {
    paddingInline: 30,
    marginTop: 20,
  },
  backButton: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    minHeight: 0,
  },
  innerContainer: {
    padding: 30,
    flex: 1,
    alignItems: "center",
  },
  heroWrapper: {
    width: "100%",
    maxWidth: 320,
    aspectRatio: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
  },
  message: {
    fontSize: typography.fontSize.md,
    lineHeight: typography.lineHeight.md,
    fontWeight: "400",
  },
  input: {
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    gap: 10,
  },
  textInput: {
    flex: 1,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 6,
    flexWrap: "nowrap",
    minHeight: 44,
    paddingVertical: 8,
    width: "100%",
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxTick: {
    color: "#fff",
    fontSize: 12,
    lineHeight: 12,
  },
  checkboxText: {
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.sm,
    flexShrink: 1,
  },
  signupBtn: {
    width: "100%",
    marginBlock: 10,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    gap: 12,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    opacity: 0.2,
  },
  dividerText: {
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.sm,
    fontWeight: "500",
  },
  googleBtn: {},
  appleBtn: {
    marginTop: 20,
  },
  loginRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
    gap: 6,
  },
  loginText: {
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.sm,
  },
  loginLink: {
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.sm,
    fontWeight: "600",
  },
});
