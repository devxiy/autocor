import { useQueryClient, useMutation } from "react-query";
import { createRecord } from "./api";

export function useCreate() {
  const queryClient = useQueryClient();

  return useMutation((data) => createRecord(data));
}
