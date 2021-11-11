const checkMac = (mac) => {
  const pattern =
    /^(([A-F]|[0-9])([A-F]|[0-9]):){5}([A-F]|[0-9])([A-F]|[0-9])$/i;
  return pattern.test(mac);
};

export default checkMac;
