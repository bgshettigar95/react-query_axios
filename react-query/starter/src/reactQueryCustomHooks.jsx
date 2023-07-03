import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import customFetch from "./util";
import { toast } from "react-toastify";

export const useFetchTasks = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => customFetch.get("/"),
  });

  return { isLoading, data, error };
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  const { mutate: createTask, isLoading } = useMutation({
    mutationFn: (taskName) => customFetch.post("/", { title: taskName }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("task Added!");
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });

  return { createTask, isLoading };
};

export const useEditTask = () => {
  const queryclient = useQueryClient();
  const { mutate: editTask } = useMutation({
    mutationFn: ({ taskId, isDone }) => {
      customFetch.patch("/" + taskId, { isDone });
    },
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("updated");
    },
  });

  return { editTask };
};

export const useDeleteTask = () => {
  const queryclient = useQueryClient();
  const { mutate: deleteTask } = useMutation({
    mutationFn: (taskId) => {
      customFetch.delete("/" + taskId);
    },
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ["tasks"] });
      // toast.success("deleted");
    },
  });

  return { deleteTask };
};
