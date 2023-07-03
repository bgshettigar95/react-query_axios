import { useQuery } from "@tanstack/react-query";
import SingleItem from "./SingleItem";
import customFetch from "./util";
import { useFetchTasks } from "./reactQueryCustomHooks";
const Items = () => {
  const { isLoading, data, error } = useFetchTasks();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.response.data}</div>;
  }
  return (
    <div className="items">
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
