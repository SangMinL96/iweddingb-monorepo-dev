/**
 * 만약 JSON이 아닐 경우 받은 문자열 출력
 */
export const parseJson = (str: string) => {
  try {
    const obj = JSON.parse(str);
    if (obj && typeof obj === `object`) {
      return JSON.parse(str);
    }
  } catch (err) {
    return str;
  }
  return str;
};
/**
 * 만약 배열이 아닐경우 빈배열 리턴
 * es6 배열 함수 undefined 에러 방지
 */
export const parseArray = (data) => {
  try {
    if (Array.isArray(data)) {
      return data;
    }
    return [] as [];
  } catch (err) {
    return [] as [];
  }
};
/**
 * 데이터가 있으면 true
 * 데이터가 없으면 false
 */
export const isEmpty = (data: any) => {
  if (
    data === "" ||
    !data ||
    data.length < 1 ||
    data === "null" ||
    data === "undefined"
  ) {
    return false;
  }
  return true;
};
