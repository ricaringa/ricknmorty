import { useEffect, useState } from "react";
import { getLocationById, getResidents } from "../utils/fetchData";
import { actions as DataActions } from "../store/slices/Data/reducer";
import { useAppSelector } from "../store/hooks";
import { RootState, useAppDispatch } from "../store";

export default function useData() {
  const [error, setError] = useState<string>("");
  const [id, setId] = useState<number>(0);
  const { Characters, Loading, HaveResidents } = useAppSelector((state: RootState)=>state.data)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (id !== 0) { 
      // This validation prevents the useEffect hook to run on init
      dispatch(DataActions.setLoading(true))
      getLocationById(id)
        .then((data) => {
          getResidents(data)
          .then((data)=> {
            dispatch(DataActions.setCharacters(data))
            dispatch(DataActions.setLoading(false))
          })
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [id]);

  return {
    Loading,
    error,
    id,
    Characters,
    HaveResidents,
    setId,
    setError,
  };
}
