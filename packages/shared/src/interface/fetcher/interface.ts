export interface FetcherResultItf {
  status: number;
  result: "success" | "fail";
  error?: string;
}
