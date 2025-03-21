export const getBgColor = () => {
  const bgarr = [
    "#b73e3e",
    "#5b45b0",
    "#7f167f",
    "#735f32",
    "#1d2569",
    "#285430",
  ];
  const randombg = Math.floor(Math.random() * bgarr.length);
  const color = bgarr[randombg];
  return color;
};
