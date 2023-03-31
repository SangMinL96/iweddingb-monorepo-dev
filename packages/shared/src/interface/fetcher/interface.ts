export interface ExecResultItf {
  result: "success" | "fail";
  insertId?: number | string;
}
