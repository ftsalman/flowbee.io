import React from 'react';

const GenericIcon = ({ size = "16", color = "currentColor", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10"/>
  </svg>
);

export const IconLock = GenericIcon;
export const IconVisiblity = GenericIcon;
export const IconVisiblityOff = GenericIcon;
export const IconSpark = GenericIcon;
export const IconLogout = GenericIcon;
export const IconBellAlt = GenericIcon;
export const IconCross = GenericIcon;
export const IconInfo = GenericIcon;
export const IconTick = GenericIcon;
export const IconLoading = GenericIcon;
export const IconSearch = GenericIcon;
export const IconSwap = GenericIcon;
export const IconBlock = GenericIcon;
export const IconPlus = GenericIcon;
export const IconUpload = GenericIcon;
export const IconBin = GenericIcon;
export const IconSave = GenericIcon;
export const IconDropDown = GenericIcon;
export const IconCancel2 = GenericIcon;
export const IconEdit = GenericIcon;
export const IconClose = GenericIcon;
