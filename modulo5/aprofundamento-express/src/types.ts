
// Exercício 2 - Criei uma variável tipo, para represenar os tipos dos afazeres
export type Tarefas = {
    userId: number,
    id: number,
    title: string;
    completed: boolean;
}

// Criei uma variável tipo, para representar os tipos dos usuários criado para serem autorizados
export type Users = {
    id: number,
    name: string,
    userName: string,
    email: string
}

