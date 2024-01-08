const lbFs = require("fs");

type User0 = {
    nome: string;
    email: string;
    cpf: string;
    profissao?: string;
    endereco: Addressu | null;
};
type Addressu = {
    cep: string;
    rua: string;
    complemento?: string;
    bairro: string;
    cidade: string;
};

const euzerinho: User0 = {
    nome: "Iago",
    email: "iago@email.com",
    cpf: "123456789-11",
    profissao: "desempregado",
    endereco: {
        cep: "11111111",
        rua: "coomp",
        bairro: "tanque",
        cidade: "salvador",
    },
};

const removerUsuário = (cpf: string): User0[] => {
    const users: User0[] = JSON.parse(lbFs.readFileSync("../bd.json", "utf-8"));
    const currentUser0 = users.find((user) => user.cpf === cpf);
    const currentUser0Index = users.indexOf(currentUser0);

    const removedUser0: User0[] = users.splice(currentUser0Index, 1);

    lbFs.writeFileSync("../bd.json", JSON.stringify(users, null, 4), "utf-8");

    return removedUser0;
};

console.log(removerUsuário("cpf"));
