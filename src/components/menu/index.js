function Menu () {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-2 bg-light" style={{"width": "250px","height":"100%", "position": "fixed"}}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <svg className="bi me-2" width="40" height="32"></svg>
          <span className="fs-6">Módulo do Sistema</span>
        </a>
        <hr/>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="/" className="nav-link link-dark" aria-current="page">
              <svg className="bi me-2" width="16" height="16"></svg>
                Upload do Arquivo
            </a>
          </li>
          <li>
            <a href="/relatorio" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16"></svg>
                Relatórios
            </a>
          </li>
          <li>
            <a href="/politica" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16"></svg>
                Política
            </a>
          </li>
        </ul>
      </div>
    )
}
export default Menu