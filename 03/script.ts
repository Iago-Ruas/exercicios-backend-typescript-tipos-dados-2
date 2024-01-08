const libFs = require("fs");

type User = {
    nome: string;
    email: string;
    cpf: string;
    profissao?: string;
    endereco: Address | null;
};
type Address = {
    cep: string;
    rua: string;
    complemento?: string;
    bairro: string;
    cidade: string;
};

const euzer: User = {
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

const detalharUsuário = (cpf: string, data: User): User => {
    const users: User[] = JSON.parse(libFs.readFileSync("../bd.json", "utf-8"));
    const currentUser = users.find((user) => user.cpf === cpf);
    const currentUserIndex = users.indexOf(currentUser);
    const userToWrite: User = { ...data };

    users.splice(currentUserIndex, 1, userToWrite);

    libFs.writeFileSync("../bd.json", JSON.stringify(users), "utf-8");

    return userToWrite;
};

detalharUsuário("cpf", euzer);
