import { useRef } from "react";
import "../componentes/estilocad.css";

function Cadastro (props){

    const nomeRef = useRef();
    const useCpf = useRef();
    const useEndereco = useRef();
    const useProfissao = useRef();
    const useEmail = useRef();
    const useSenha = useRef();

    function cadastrando(event){
    event.preventDefault();
      

    const pessoa = {
      nome: nomeRef.current.value,
      cpf: useCpf.current.value,
      endereco: useEndereco.current.value,
      profissao: useProfissao.current.value,
      email: useEmail.current.value,
      senha: useSenha.current.value,
    };

    props.fazercadastro(pessoa);

  }

    return (
    <body>
        <div class="involucro" >
          <a class="links" id="paracadastro"></a>
          <a class="links" id="paralogin"></a>
      
          <div class="alegre">
           
            <div id="login">
              <form method="post" action="">
                <h1>Login</h1>
                <p>
                  <label for="nome_login">Seu nome</label>
                  <input  id="nome_login" name="nome_login" required="required" type="text" placeholder="ex. contato@htmlecsspro.com"/>
                </p>
      
                <p>
                  <label for="email_login">Seu e-mail</label>
                  <input id="email_login" name="email_login" required="required" type="password" placeholder="ex. senha" />
                </p>
      
                <p>
                  <input type="checkbox" name="manterlogado" id="manterlogado" value="" />
                  <label for="manterlogado">Manter-me logado</label>
                </p>
      
                <p>
                  <input type="submit" value="Logar" />
                </p>
      
                <p class="link">
                  Ainda não tem conta?
                  <a href="#paracadastro">Cadastre-se</a>
                </p>
              </form>
            </div>
      
         
            <div id="cadastro">
              <form >
                <h1>Cadastro</h1>
      
                <p>
                  <label for="nome_cad">Seu nome</label>
                  <input ref={nomeRef} id="nome_cad" name="nome_cad" required="required" type="text" placeholder="nome" />
                </p>
      
                 <p>
                  <label for="cpf">Cpf</label>
                  <input ref={useCpf} id="cpf" name="cpf" required="required" type="text" placeholder="000.000.000-00"/>
                </p>
      
      
                <p>
                  <label for="nome_cad">Endereço</label>
                  <input ref={useEndereco} id="end_cad" name="end_cad" required="required" type="text" placeholder="avenida guajajaras" />
                </p>
      
                <p>
                   <label for="prof_cad">Profissão</label>
                   <input ref={useProfissao} id="prof_cad" name="prof_cad" required="required" type="text" placeholder="profissão" />
                </p>
               
                <p>
      
                  <label for="email_cad">Seu e-mail</label>
                  <input ref={useEmail} id="email_cad" name="email_cad" required="required" type="email" placeholder="contato@htmlecsspro.com"/>
                </p>
      
                <p>
                  <label for="senha_cad">Sua senha</label>
                  <input ref={useSenha} id="senha_cad" name="senha_cad" required="required" type="password" placeholder="ex. 1234"/>
                </p>
      
                <p>
                <input type="submit" value="Cadastrar" onClick={cadastrando}/>
                </p>
      
                <p class="link">
                  Já tem conta?
                  <a href="#paralogin"> Ir para Login </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </body>
      );

}
export default Cadastro;