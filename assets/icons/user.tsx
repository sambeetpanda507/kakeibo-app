import Svg, { Path, SvgProps } from "react-native-svg";

type UserProps = SvgProps & {
  color?: string;
};

export default function User({ ...props }: UserProps) {
  const { color = "currentColor", ...svgProps } = props;

  return (
    <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...svgProps}>
      <Path
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 19.125a8.25 8.25 0 0 1 14.998 0"
      />
    </Svg>
  );
}
