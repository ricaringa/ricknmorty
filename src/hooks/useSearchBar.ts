import { useState } from "react";
import useData from "./useData";
import { useAppDispatch } from "../store";
import { actions as DataActions } from '../store/slices/Data/reducer'
import { getBgColorValue } from "../utils/theming";
export default function useSearchBar() {
  const [input, setInput] = useState<string>("");
  const { setId } = useData();
  const dispatch = useAppDispatch()
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleSearchButtonClick = () => {
    input !== "" && setId(Number.parseInt(input));
    dispatch(DataActions.setBG(getBgColorValue(Number.parseInt(input))))
  };
  return {
    handleInputChange,
    handleSearchButtonClick,
  };
}