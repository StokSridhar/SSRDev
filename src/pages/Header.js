const Header = () => {
  return (
    <div>
        <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">SSR Palace</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav"> 
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Type of Halls</a>
        </li> 
         <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li> 
          <li className="nav-item">
          <a className="nav-link" href="#">Gallery</a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="#">Get in Touch</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </header>
    </div>
  )
}

export default Header