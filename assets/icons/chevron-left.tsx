import Svg, { Path, type SvgProps } from "react-native-svg";

type ChevronLeftProps = SvgProps & {
  color?: string;
};

export default function ChevronLeft({
  color = "#111827",
  ...props
}: ChevronLeftProps) {
  return (
    <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </Svg>
  );
}
