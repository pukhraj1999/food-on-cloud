export let themeColor = {
  text: "#f97316",
  bgColor: (opacity: string) => `rgba(251,146,60,${opacity})`,
  shadowA: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
  shadowB: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
};

export const themeOptions = [{
  id: 1,
  textColorOption: "#f97316",
  bgColorOption: "251,146,60",
}, {
  id: 2,
  textColorOption: "#77B254",
  bgColorOption: "119, 178, 84",
}, {
  id: 3,
  textColorOption: "#3B6790",
  bgColorOption: "59, 103, 144",
}, {
  id: 4,
  textColorOption: "#D84040",
  bgColorOption: "216, 64, 64",
}]