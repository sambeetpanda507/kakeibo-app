import Svg, { Path, SvgProps } from "react-native-svg";

type EnvolopeProps = SvgProps & {
  color?: string;
};

export default function Envolope({ ...props }: EnvolopeProps) {
  const { color = "currentColor", ...svgProps } = props;

  return (
    <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...svgProps}>
      <Path
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </Svg>
  );
}
