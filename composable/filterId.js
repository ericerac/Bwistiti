
import { usePostStore } from "@/store/usePost";


const FilterId = (x, pD, link) => {
  const postData = usePostStore();
const { getPageData } = postData

 const post = postData.post_Data;

    // console.log("FILTER ID DATA", x, "POSTDATA",pD, "LINK",link);
  // const stringi = JSON.stringify(pD);
  // const parsi = JSON.parse(stringi);
  //  const postList = parsi

  
  
  // let x = data.id
  // const cardUp = postList.find((i) => i._id == x);
  const cardUp = post.find((i) => i._id == x);
  // console.log("CARD UP FILTER ID",cardUp);
  return cardUp
}
export default FilterId