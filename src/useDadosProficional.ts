import IProficional from "./types/IProficional";
import useFetch from "./useFetch";

const useDadosProficional = () => {
    return useFetch<IProficional[]>({ url: "profissionais" });
};

export default useDadosProficional;
