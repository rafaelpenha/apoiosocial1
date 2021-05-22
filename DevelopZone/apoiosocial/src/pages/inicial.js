import { Link } from "react-router-dom";

function Inicial() {
    return (
      <body>
            <header className="bg-gray-200 p-2 flex item-center justify-between">
                <div className="text-white font-bold text-3x1"><Link to="/">Apoio social</Link></div>
                <div>
                    <ul className="list-none m-0 p-0 flex item-baseline ">
                        <li className="m-6"><Link to="cadastro">cadastro</Link></li>
                        <li className="m-6"><Link to="login">login</Link></li>
                        <li className="m-6"><Link to="usuarios">usuarios</Link></li>

                    </ul>
                </div>
            </header>
            <div><h1 className="c-red-200">conheça sua nova plataforma de ajuda e serviços a comunidade</h1></div>
       </body>
    )
}
export default Inicial;