import { Text, type TextProps } from "react-native";

type AppTextProps = TextProps;

export default function AppText({
  children,
  style,
  ...props
}: AppTextProps) {
  return (
    <Text style={style} {...props}>
      {children}
    </Text>
  );
}
