import "./App.css";
import Container from "./components/Container";
import Cabecalho from "./components/Cabecalho";
import Titulo from "./components/Titulo";
import Rodape from "./components/Rodape";
import Tabela from "./components/Tabela";
import useDadosConsulta from "./useDadosConsulta";
import Grafico from "./components/Grafico";
import useDadosProficional from "./useDadosProficional";

function App() {
    const { dados: consultas, erro: consultasError } = useDadosConsulta();
    const { dados: proficionais, erro: proficionaisError } = useDadosProficional();
    
    if(consultasError || proficionaisError) {
        console.log("Algo de errado não esta certo...");
    }

    return (
        <>
            <Cabecalho />
            <Container>
                <Titulo>Área Administrativa</Titulo>
                <Tabela consultas={consultas} />
                <Grafico consultas={consultas} proficionais={proficionais}/>
            </Container>
            <Rodape />
        </>
    );
}

export default App;
