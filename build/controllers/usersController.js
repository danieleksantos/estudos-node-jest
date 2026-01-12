import { database } from "../database.js";
export class UsersController {
    criarUsuario(request, response) {
        const { name } = request.body;
        if (name.length < 1) {
            return response.status(403).json({ mesagem: 'Não é possível criar usuário sem um nome' });
        }
        database.push(name);
        return response.status(201).json({ 'mensagem': `Usuário ${name} criado.` });
    }
    listarUsuario(request, response) {
        return response.status(200).json(database);
    }
}
//# sourceMappingURL=usersController.js.map