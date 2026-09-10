import {Link} from 'react-router-dom'
import {Home, Info} from 'lucide-react'

const NavBar = () => {
  return (
    <nav className="bg-blue-400 shadow-md">
      <div className="max-w-5xl mx-auto px-4">
        <span className="text-xl font-bold text-white">Projeto</span>
      </div>

      <div className="flex space-x-4 items-center">
        <Link to="/" className="flex items-center px-3 py-2 font-medium text-amber-200 hover:text-amber-600"><Home/>Home</Link>
        <Link to="/sobre" className="flex items-center px-3 py-2 font-medium text-amber-200 hover:text-amber-600" ><Info/>Sobre</Link>
        <Link to="/produto" className="flex items-center px-3 py-2 font-medium text-amber-200 hover:text-amber-600">Produto</Link>
        <Link to="/contato" className="flex items-center px-3 py-2 font-medium text-amber-200 hover:text-amber-600">Contato</Link>
      </div>
      
    </nav>
  )
}

export default NavBar
