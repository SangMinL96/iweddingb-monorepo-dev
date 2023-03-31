import dayjs from "dayjs";

export const formatToday = () => {
  return dayjs(new Date()).format("YYYY/MM/DD");
};

export const getRand = (length = 20) => {
  const nums = Array.from({ length }).map((_, index) => Number(index));
  const genNums = [];
  const inArray = (array, el) => {
    for (let i = 0; i < array.length; i++) if (array[i] === el) return true;
    return false;
  };
  const rand = (array) => {
    const rand = array[Math.floor(Math.random() * array.length)];
    if (!inArray(genNums, rand)) {
      genNums.push(rand);
      return rand;
    }
    return rand(array);
  };
  return rand(nums);
};
