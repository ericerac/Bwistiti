
import { usePostStore } from "@/store/usePost";

const FilterId = (x, pD, link) => {
  const postData = usePostStore();
  const post = postData.post_Data;
  const cardUp = post.find((i) => i._id == x);
   //console.log("CARD UP FILTER ID",cardUp);
  return cardUp
}
export default FilterId