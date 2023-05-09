import IProficional from "./types/IProfissional";
import useFetch from "./useFetch";

const useDadosProficional = () => {
    return useFetch<IProficional[]>({ url: "profissionais" });
};

export default useDadosProficional;
