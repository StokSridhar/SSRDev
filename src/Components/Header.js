import Link from 'next/link'

const Header = () => {
  return (
    <div>
        <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container"> 
    <a className="navbar-brand logo" href="/">SSR Palace</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav"> 
        <li className="nav-item">
        <Link href="/about" className="nav-link">About Us</Link>  
        </li> 
         <li className="nav-item">
         <Link href="/services" className="nav-link">Services</Link>  
        </li> 
        <li className="nav-item">
        <Link href="/halls" className="nav-link">Halls</Link>
        </li> 
          <li className="nav-item">
          <Link href="/gallery" className="nav-link">Gallery</Link>
        </li>
         <li className="nav-item">
         <Link href="/contact" className="nav-link">Contact</Link> 
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