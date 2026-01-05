import React, { useId } from 'react';
import classNames from 'classnames';

import styles from './loader.module.css';

export type LoaderProps = {
  size?: number;
  className?: string;
  title?: string;
} & React.SVGProps<SVGSVGElement>;

export function Loader({ size = 120, className, title, ...rest }: LoaderProps) {
  const uniqueId = useId();
  const filterBlurId = `loader-filter-blur-${uniqueId}`;
  const filterInnerId = `loader-filter-inner-${uniqueId}`;
  const radialPrimaryId = `loader-radial-primary-${uniqueId}`;
  const radialHighlightId = `loader-radial-highlight-${uniqueId}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 320 320"
      fill="none"
      className={classNames(styles.loader, className)}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : 'presentation'}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <g filter={`url(#${filterBlurId})`}>
        <circle cx="160" cy="160" r="80" fill="white" />
      </g>
      <g filter={`url(#${filterInnerId})`}>
        <circle cx="160" cy="160" r="40" fill={`url(#${radialPrimaryId})`} />
        <circle cx="160" cy="160" r="40" fill={`url(#${radialHighlightId})`} />
      </g>
      <defs>
        <filter
          id={filterBlurId}
          x="0"
          y="0"
          width="320"
          height="320"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_9270_92" />
        </filter>
        <filter
          id={filterInnerId}
          x="120"
          y="118"
          width="80"
          height="82"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-2" />
          <feGaussianBlur stdDeviation="16" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_9270_92" />
        </filter>
        <radialGradient
          id={radialPrimaryId}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(120 120) rotate(45) scale(113.137)"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#D0D5DD" />
        </radialGradient>
        <radialGradient
          id={radialHighlightId}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(179.375 137.5) rotate(111.93) scale(51.8788)"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0.16" />
        </radialGradient>
      </defs>
    </svg>
  );
}
