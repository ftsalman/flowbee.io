export const getPriceData = (plan, currency, pricingTable) => {
  const isUSD = currency.code === "USD";
  const baseData = isUSD ? pricingTable.AED : pricingTable[currency.code];
  const rate = isUSD ? 0.27 : 1;
  const data = baseData[plan];
  return {
    monthly: (data.monthly * rate).toFixed(isUSD ? 2 : 0),
    yearly: (data.yearly * rate).toFixed(isUSD ? 2 : 0),
    save: (data.save * rate).toFixed(isUSD ? 2 : 0),
    extraUser: (data.extraUser * rate).toFixed(isUSD ? 2 : 0),
    extraBranch: (data.extraBranch * rate).toFixed(isUSD ? 2 : 0),
  };
};

export const detectUserRegion = (userLocale, regions) => {
  if (userLocale.includes("Asia/Calcutta") || userLocale.includes("Asia/Kolkata")) {
    return regions[0];
  } else if (
    userLocale.includes("Asia/Dubai") ||
    userLocale.includes("Asia/Muscat") ||
    userLocale.includes("Asia/Qatar") ||
    userLocale.includes("Asia/Kuwait")
  ) {
    return regions[1];
  } else {
    return regions[2];
  }
};

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
