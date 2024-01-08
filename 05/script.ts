const fsLb = require("fs");

type User1 = {
    nome: string;
    email: string;
    cpf: string;
    profissao?: string;
    endereco: Address0 | null;
};
type Address0 = {
    cep: string;
    rua: string;
    complemento?: string;
    bairro: string;
    cidade: string;
};

const acharUsuarioPorProfissao = (prof: string): User1[] => {
    const users: User1[] = JSON.parse(fsLb.readFileSync("../bd.json", "utf-8"));

    const resp: User1[] = [];

    for (const e of users) {
        if (e.profissao === prof) resp.push(e);
    }

    return resp;
};

console.log(acharUsuarioPorProfissao("dev"));
