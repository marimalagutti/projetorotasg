import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="bg-blue-400 shadow-md">
      <div>
        <span>Projeto</span>
      </div>

      <div className="flex space-x-4 items-center">
        <Link to="/" className="flex items-center px-3 py-2 font-medium text-amber-200 hover:text-amber-600">Home</Link>
        <Link to="/sobre" className="flex items-center px-3 py-2 font-medium text-amber-200 hover:text-amber-600" >Sobre</Link>
        <Link to="/produto" className="flex items-center px-3 py-2 font-medium text-amber-200 hover:text-amber-600">Produto</Link>
        <Link to="/contato" className="flex items-center px-3 py-2 font-medium text-amber-200 hover:text-amber-600">Contato</Link>
      </div>
      
    </nav>
  )
}

export default NavBar
