import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const SCREEN_SIZES = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export const sortArr = (array, key, sortType) => {
  return array.sort((a, b) => {
    if (a[key] < b[key]) {
      return sortType === true ? -1 : 1;
    }
    if (a[key] > b[key]) {
      return sortType === true ? 1 : -1;
    }
    return 0;
  });
};

export const getMediaUrl = (url = "") => {
  if (!url) return null;

  if (url.startsWith("/")) return import.meta.env.VITE_BASE_URL + url;

  return import.meta.env.VITE_BASE_URL + "/" + url + " ";
};

export const formatDateAndTimeShort = (timestamp) => {
  if (!timestamp) return;

  const date = new Date(timestamp);
  if (isNaN(date)) return;

  const day = date.getDate().toString().padStart(2, "0");

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getMonth()];

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // convert 0 to 12
  const formattedTime = `${hours
    .toString()
    .padStart(2, "0")}:${minutes}${ampm}`;

  const formattedDate = `${day} ${month}`;

  return { date: formattedDate, time: formattedTime };
};

export const formatDateAndTime = (timestamp) => {
  if (!timestamp) return;

  const date = new Date(timestamp);

  // Format date as "DD-MM-YYYY"
  const formattedDate = `${date.getDate().toString().padStart(2, "0")}-${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${date.getFullYear()}`;

  // Format time as "HH:MM:SS"
  const formattedTime = `${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;

  return { date: formattedDate, time: formattedTime };
};

export const areObjectsEqual = (obj1, obj2) => {
  if (obj1 == null || obj2 == null) {
    return null;
  }
  const obj1Json = JSON.stringify(obj1);
  const obj2Json = JSON.stringify(obj2);
  return obj1Json === obj2Json;
};
