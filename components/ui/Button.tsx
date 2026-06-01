import useTheme from "@/hooks/use-theme";
import { typography } from "@/theme/typography";
import { ReactNode } from "react";
import { Pressable, type PressableProps, type StyleProp, StyleSheet, type TextStyle, View, type ViewStyle } from "react-native";
import AppText from "./app-text";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";
type ButtonRadius = "full" | "subtle";

type ButtonProps = PressableProps & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  radius?: ButtonRadius;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
};

const sizeStyles: Record<ButtonSize, ViewStyle> = {
  sm: {
    minHeight: 40,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  md: {
    minHeight: 48,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  lg: {
    minHeight: 56,
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
};

const textSizeStyles: Record<ButtonSize, TextStyle> = {
  sm: {
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.sm,
  },
  md: {
    fontSize: typography.fontSize.md,
    lineHeight: typography.lineHeight.md,
  },
  lg: {
    fontSize: typography.fontSize.lg,
    lineHeight: typography.lineHeight.lg,
  },
};

const radiusStyles: Record<ButtonRadius, ViewStyle> = {
  full: {
    borderRadius: 999,
  },
  subtle: {
    borderRadius: 10,
  },
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  radius = "full",
  fullWidth = false,
  leftIcon,
  rightIcon,
  disabled,
  style,
  textStyle,
  ...props
}: ButtonProps) {
  const theme = useTheme();
  const containerStyle = getContainerStyle(variant, theme);
  const labelStyle = getLabelStyle(variant, theme);
  const rippleColor = getRippleColor(variant, theme);
  const hasTextChild = typeof children === "string" || typeof children === "number";

  return (
    <Pressable
      accessibilityRole="button"
      android_ripple={{ color: rippleColor, borderless: false }}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        sizeStyles[size],
        radiusStyles[radius],
        containerStyle,
        !fullWidth && styles.autoWidth,
        fullWidth && styles.fullWidth,
        pressed && !disabled && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
      {...props}
    >
      <View style={styles.content}>
        {leftIcon}
        {hasTextChild ? (
          <AppText style={[styles.label, textSizeStyles[size], labelStyle, textStyle]}>{children}</AppText>
        ) : (
          children
        )}
        {rightIcon}
      </View>
    </Pressable>
  );
}

function getContainerStyle(variant: ButtonVariant, theme: ReturnType<typeof useTheme>): ViewStyle {
  switch (variant) {
    case "outline":
      return {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: theme.primary,
      };
    case "ghost":
      return {
        backgroundColor: "transparent",
      };
    case "primary":
    default:
      return {
        backgroundColor: theme.primary,
      };
  }
}

function getLabelStyle(variant: ButtonVariant, theme: ReturnType<typeof useTheme>): TextStyle {
  switch (variant) {
    case "outline":
    case "ghost":
      return {
        color: theme.primary,
      };
    case "primary":
    default:
      return {
        color: "#FFFFFF",
      };
  }
}

function getRippleColor(variant: ButtonVariant, theme: ReturnType<typeof useTheme>): string {
  switch (variant) {
    case "outline":
    case "ghost":
      return "rgba(142, 159, 124, 0.16)";
    case "primary":
    default:
      return theme.text === "#F5F5F4" ? "rgba(245, 245, 244, 0.18)" : "rgba(255, 255, 255, 0.22)";
  }
}

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    justifyContent: "center",
  },
  fullWidth: {
    width: "100%",
  },
  autoWidth: {
    alignSelf: "flex-start",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  label: {
    fontWeight: "600",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.85,
  },
  disabled: {
    opacity: 0.5,
  },
});
