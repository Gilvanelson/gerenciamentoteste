import { useState } from "react";

function Cadastro(){
    function cadastrarUsuario (e){
        e.preventDefault()
        console.log('Cadastro realizado com sucesso!')
    }

    cont [nome, setNome] = useState()

    return (
    <body>
    <section>
        <h1>Cadastrar</h1>

    <fieldset>
        <form onSubmit={cadastrarUsuario}>

            <div>
            <label htmlFor="nome">Nome</label>
            <input type="text" placeholder="Digite seu nome completo" required/>
            </div>

            <label htmlFor="Email">Email</label>
            <input type="email" required/>

            <label htmlFor="Email">Confirme o Email</label>
            <input type="email" required/>

            <label htmlFor="Senha">Senha</label>
            <input type="password" id="password" name="password" placeholder="Digite sua senha" required/>

             <input class="enviar" type="submit" name="submit" id="submit"/>

        </form>
    </fieldset>
    </section>

    
</body>
    );
}
export default Cadastro;
