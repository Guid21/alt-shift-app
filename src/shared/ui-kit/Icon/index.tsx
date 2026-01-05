import React from 'react';

export type IconName = 'trash-basket' | 'home' | 'copy' | 'spinner' | 'plus' | 'refresh';
export type IconSize = 20 | 24 | 28;

type IconProps = {
  name: IconName;
  size?: IconSize;
  color?: string;
  className?: string;
  title?: string;
} & React.SVGProps<SVGSVGElement>;

const ICONS: Record<IconName, React.ReactNode> = {
  'trash-basket': (
    <path
      d="M13.333 5v-.667c0-.933 0-1.4-.181-1.756a1.667 1.667 0 00-.729-.729c-.356-.181-.823-.181-1.756-.181H9.333c-.933 0-1.4 0-1.756.181-.314.16-.569.415-.729.729-.181.356-.181.823-.181 1.756V5m1.666 4.583v4.167m3.334-4.167v4.167M2.5 5h15m-1.667 0v9.333c0 1.4 0 2.1-.272 2.635a2.5 2.5 0 01-1.093 1.093c-.534.272-1.235.272-2.635.272H8.167c-1.4 0-2.1 0-2.635-.272a2.5 2.5 0 01-1.093-1.093c-.272-.534-.272-1.235-.272-2.635V5"
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  home: (
    <path
      d="M7.5 17.5v-6.167c0-.466 0-.7.09-.878a.833.833 0 01.365-.364c.178-.09.412-.09.878-.09h2.334c.466 0 .7 0 .878.09.157.08.284.207.364.364.091.178.091.412.091.878V17.5M9.181 2.303L3.53 6.7c-.377.294-.566.441-.702.625-.12.163-.21.347-.265.542-.062.22-.062.46-.062.938v6.03c0 .933 0 1.4.182 1.756.16.314.414.569.728.729.357.181.823.181 1.757.181h9.666c.934 0 1.4 0 1.757-.181.314-.16.569-.415.728-.729.182-.356.182-.823.182-1.757V8.804c0-.478 0-.718-.062-.938a1.665 1.665 0 00-.265-.542c-.136-.184-.325-.33-.702-.625l-5.652-4.396c-.293-.227-.44-.341-.601-.385a.834.834 0 00-.436 0c-.161.044-.308.158-.6.385z"
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  copy: (
    <path
      d="M6.667 6.667V4.333c0-.933 0-1.4.181-1.756.16-.314.415-.569.729-.729.356-.181.823-.181 1.756-.181h6.333c.934 0 1.4 0 1.757.181.314.16.569.415.729.729.181.356.181.823.181 1.756v6.334c0 .933 0 1.4-.181 1.756-.16.314-.415.569-.729.729-.356.181-.823.181-1.756.181h-2.334m-9 5h6.333c.934 0 1.4 0 1.757-.181.314-.16.569-.415.729-.729.181-.356.181-.823.181-1.756V9.333c0-.933 0-1.4-.181-1.756a1.667 1.667 0 00-.729-.729c-.356-.181-.823-.181-1.757-.181H4.333c-.933 0-1.4 0-1.756.181-.314.16-.569.415-.729.729-.181.356-.181.823-.181 1.756v6.334c0 .933 0 1.4.181 1.756.16.314.415.569.729.729.356.181.823.181 1.756.181z"
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  spinner: (
    <path
      d="M10 1.667V5m0 10v3.333M5 10H1.667m16.666 0H15m.899 5.899l-2.357-2.357m2.357-9.375l-2.357 2.357m-9.44 9.375l2.356-2.357M4.101 4.167l2.357 2.357"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  plus: (
    <path
      d="M10 4.167v11.666M4.167 10h11.666"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  refresh: (
    <path
      d="M10.833 18.333l-2.5-2.5m0 0l2.5-2.5m-2.5 2.5H12.5A5.833 5.833 0 0015 4.728M5 15.272A5.834 5.834 0 017.5 4.167h4.166m0 0l-2.5-2.5m2.5 2.5l-2.5 2.5"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export const ICON_NAMES = Object.keys(ICONS) as IconName[];

export function Icon({
  name,
  size = 24,
  color = 'currentColor',
  className,
  title,
  ...props
}: IconProps) {
  const icon = ICONS[name];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke={color}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : 'presentation'}
      {...props}
    >
      {icon}
    </svg>
  );
}
