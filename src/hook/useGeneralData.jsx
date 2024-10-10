import { useContext } from "react";
import { GeneralContext } from "../Provider/GeneralProvider";

export const useGeneralData = () => {
  const generalData = useContext(GeneralContext);
  return generalData;
};
