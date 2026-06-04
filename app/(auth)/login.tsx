import Apple from "@/assets/icons/apple";
import ChevronLeft from "@/assets/icons/chevron-left";
import Envolope from "@/assets/icons/envolope";
import Eye from "@/assets/icons/eye";
import Google from "@/assets/icons/google";
import Lock from "@/assets/icons/lock";
import Button from "@/components/ui/Button";
import AppText from "@/components/ui/app-text";
import { useAuthStore } from "@/store/authStore";
import { router } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import useTheme from "../../hooks/use-theme";
import { typography } from "../../theme/typography";

export default function Login() {
  const theme = useTheme();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const { setIsAuth, isLoading, setIsLoading } = useAuthStore();

  const handleShowVisible = () => {
    setShowPassword((prev) => !prev);
  };

  const handleBack = () => {
    router.back();
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setErrors((prev) => ({ ...prev, email: undefined }));
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setErrors((prev) => ({ ...prev, password: undefined }));
  };

  const handleLogin = () => {
    const nextErrors: { email?: string; password?: string } = {};
    const normalizedEmail = email.trim();

    if (!normalizedEmail) {
      nextErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      nextErrors.email = "Enter a valid email address";
    }

    if (!password) {
      nextErrors.password = "Password is required";
    } else if (password.length < 8) {
      nextErrors.password = "Password must be at least 8 characters";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    // TODO: Implement api to login
    setIsLoading(true);
    setTimeout(() => {
      setIsAuth(true);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      {/* --- Back button --- */}
      <View style={styles.backBtn}>
        <Button variant="ghost" onPress={handleBack} fullWidth={false} style={styles.backButton}>
          <ChevronLeft height={20} width={20} color={theme.text} />
        </Button>
      </View>

      <View style={styles.innerContainer}>
        <AppText style={[styles.welcomeText, { color: theme.text }]}>Welcome back</AppText>
        <AppText style={[styles.message, { color: theme.text }]}>Login to continue your journey</AppText>

        {/* --- Text area --- */}
        <View>
          {/* --- Email --- */}
          <View style={[styles.input, { borderColor: errors.email ? theme.danger : theme.text }]}>
            <Envolope height={18} width={18} color={theme.text} />
            <TextInput
              style={[styles.textInput, { color: theme.text }]}
              keyboardType="email-address"
              placeholder="Email"
              placeholderTextColor={theme.text}
              value={email}
              onChangeText={handleEmailChange}
            />
          </View>
          {errors.email ? <Text style={[styles.errorText, { color: theme.danger }]}>{errors.email}</Text> : null}

          {/* --- Password --- */}
          <View style={[styles.input, { borderColor: errors.password ? theme.danger : theme.text }]}>
            <Lock height={18} width={18} color={theme.text} />
            <TextInput
              style={[styles.textInput, { color: theme.text }]}
              secureTextEntry={!showPassword}
              placeholder="Password"
              placeholderTextColor={theme.text}
              value={password}
              onChangeText={handlePasswordChange}
            />
            <Pressable onPress={handleShowVisible}>
              <Eye height={18} width={18} color={theme.text} />
            </Pressable>
          </View>
          {errors.password ? <Text style={[styles.errorText, { color: theme.danger }]}>{errors.password}</Text> : null}
        </View>

        <View>
          <Text style={[styles.forgotPassword, { color: theme.primary }]}>Forgot password?</Text>
        </View>

        <Button fullWidth style={styles.button} radius="subtle" onPress={handleLogin} disabled={isLoading}>
          {isLoading ? <ActivityIndicator color="#FFFFFF" /> : "Login"}
        </Button>

        <View style={styles.divider}>
          <View style={[styles.dividerLine, { backgroundColor: theme.text }]} />
          <AppText style={[styles.dividerText, { color: theme.text }]}>or</AppText>
          <View style={[styles.dividerLine, { backgroundColor: theme.text }]} />
        </View>

        <View style={{ marginTop: 50 }}>
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

        <View style={styles.signupRow}>
          <AppText style={[styles.signupText, { color: theme.text }]}>Don&apos;t have an account?</AppText>
          <Pressable onPress={() => router.push("/(auth)/signup")}>
            <AppText style={[styles.signupLink, { color: theme.primary }]}>Sign Up</AppText>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

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
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: typography.fontSize["2xl"],
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "500",
  },
  message: {
    fontSize: typography.fontSize.md,
    lineHeight: typography.lineHeight.md,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 50,
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
  errorText: {
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.sm,
    marginTop: -4,
    marginBottom: 6,
  },
  forgotPassword: {
    textAlign: "right",
  },
  button: {
    marginTop: 30,
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
  signupRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
    gap: 6,
  },
  signupText: {
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.sm,
  },
  signupLink: {
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.sm,
    fontWeight: "600",
  },
});
