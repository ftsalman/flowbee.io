import React from 'react';

const GenericIcon = ({ size = "16", color = "currentColor", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
  </svg>
);

export const IconCheverontDown = GenericIcon;
export const IconCheveronLeft = GenericIcon;
export const IconCross = GenericIcon;
export const IconCircle = GenericIcon;
export const IconArrowBack = GenericIcon;
export const IconSearch = GenericIcon;
export const IconDelete = GenericIcon;
export const IconEdit = GenericIcon;
export const IconUpload = GenericIcon;
export const IconImage = GenericIcon;
export const IconMovie = GenericIcon;
export const IconMusicNote = GenericIcon;
export const IconMoreVertical = GenericIcon;
