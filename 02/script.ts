const fsLib = require("fs");

type Endereco = {
    cep: string;
    rua: string;
    complemento?: string;
    bairro: string;
    cidade: string;
};

type Usuario = {
    nome: string;
    email: string;
    cpf: string;
    profissao?: string;
    endereco: Endereco | null;
};

const eu: Usuario = {
    nome: "Iago",
    email: "email",
    cpf: "numero cpf",
    profissao: "dev",
    endereco: {
        cep: "12345678",
        rua: "rua",
        complemento: "complemento",
        bairro: "bairro",
        cidade: "cidade",
    },
};

const caminhoArquivo = "../bd.json";

const lerArquivo = (caminho: string): Usuario[] => {
    try {
        const dadosJaEscritos: string = fsLib.readFileSync(caminho, "utf-8");
        return JSON.parse(dadosJaEscritos);
    } catch (error) {
        return [];
    }
};

const escreverArquivo = (caminho: string, dados: Usuario[]): void => {
    fsLib.writeFileSync(caminho, JSON.stringify(dados, null, 4), "utf-8");
};

const cadastrarUsuario = (obj: Usuario): Usuario => {
    const dadosJaEscritos: Usuario[] = lerArquivo(caminhoArquivo);

    const dadosAtualizados: Usuario[] = [...dadosJaEscritos, obj];

    escreverArquivo(caminhoArquivo, dadosAtualizados);

    console.log("Cadastro realizado com sucesso!");

    return obj;
};

console.log(cadastrarUsuario(eu));
