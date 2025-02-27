function usuario(login, senha){
    let usuario = 'admin';
    let entrada = 'admin';

    if(login === usuario && senha === entrada){
        return 'Bem vindo, admin!';
    } else {
        return 'Login ou senha inválidos!';
    }
}

console.log(usuario('admin', 'admin')); // Bem vindo, admin!
console.log(usuario('admin', '123')); // Login ou senha inválidos!