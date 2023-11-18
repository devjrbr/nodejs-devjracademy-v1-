const prompt = require("prompt-sync")({ sigint: true });

let database = [];
let option;


function createClient() {
    console.clear();
    console.log("-------------Cadastrar cliente --------------");
    let username = prompt("Nome: ");
    let address = prompt("Endereço: ");
    let birthday = prompt("Data de nascimento (DD/MM/YYYY): ");
    database.push([username, address, birthday]);
    console.log("---------------------------------------------");
    prompt("Tecle algo para voltar ao menu: ");
}

function listClientByName() {
    console.log("---------------------------------------------");
    console.log("listing client...");
    let name = prompt("Digite um nome: ");

    let foundClient = database.filter(client => client[0] == name)

    console.log(foundClient);
    console.log("---------------------------------------------");
    prompt("Tecle algo para voltar ao menu: ");
}

function listAllClients() {
    console.clear();
    console.log("------------- CLIENTES ATIVOS --------------");
    console.log(database);
    console.log("------------- CLIENTES ATIVOS --------------");
    prompt("Tecle algo para voltar ao menu: ");
}

function updateClientByName() {
    console.log("---------------------------------------------");
    console.log("updating client...");
    
    let name = prompt("Digite um nome: ");

    let clientIndex = database.findIndex(client => client[0] == name);

    if(clientIndex == -1) {
        console.log("Cliente não encontrado");
        prompt("Tecle algo para voltar ao menu: ");
        return;
    }

    let newName = prompt('Digite um novo nome: ');
    let newAddress = prompt('Digite um novo endereço: ');
    let newBirth = prompt('Digite uma data de aniversário: ');

    database[clientIndex] = [newName, newAddress, newBirth];
    
    console.log("---------------------------------------------");
    prompt("Tecle algo para voltar ao menu: ");
}

function deleteClientByName() {
    console.log("---------------------------------------------");
    console.log("deleting client...");
    console.log("---------------------------------------------");
    prompt("Tecle algo para voltar ao menu: ");
}

do {
    console.clear();
    console.log("---------------------------------------------");
    console.log("[1] - Cadastrar ...");
    console.log("[2] - Lista por nome ...");
    console.log("[3] - Listar todos clientes...");
    console.log("[4] - Atualizar por nome ...");
    console.log("[5] - Deletar por nome ...");
    console.log("[0] - Sair ...");
    console.log("---------------------------------------------");
    option = prompt("Opção: ");

    switch (parseInt(option)) {
        case 1:
            createClient();
            break;

        case 2:
            listClientByName();
            break;

        case 3:
            listAllClients();
            break;

        case 4:
            updateClientByName();
            break;

        case 5:
            deleteClientByName();
            break;

        case 0:
            break;

        default:
            console.log('Opção inválida!');

    }

} while(option != 0);