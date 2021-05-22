import Cadastro from "./Cadastro";
import axios from 'axios'


function Usuarios (){
    async function Cadastrar(pessoa){
        console.log(pessoa)
        await axios.post("https://apoiosocial317-default-rtdb.firebaseio.com/pessoas.json", pessoa);

    }



        return (
            <div>
                <h1>Usuarios cadastrados</h1>
                                  
            <Cadastro  fazercadastro={Cadastrar}/>
            </div>
        );


}
export default Usuarios;