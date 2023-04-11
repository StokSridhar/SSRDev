import Link from 'next/link'
const Footer = () => {
  return (
    <div> 
      <div className="footerMenu">
          <div className="container">
             <div className="row">
                <div className="col-md-4">
                 <h5>SSR Palace</h5>
                  <p>
                  SM Plaza,  1st Cross Rd, Shampura, <br/> Kaval Bairasandra, Bengaluru, <br/>  Karnataka 560032</p> 
                </div>
                <div className="col-md-4">
                  <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/halls">Halls</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/gallery">Gallery</Link></li>
                  <li><Link href="/contact">Contact</Link> </li>
                  </ul>
                </div>
                <div className="col-md-4">
                    <ul className="footerContact">
                      <li>Phone: +91 8870001377</li>
                      <li>Email: contact@ssrpalace.com</li>
                    </ul>
                    Follow us 
                </div>
             </div>
          </div>
      </div>
        <div class="container text-center">
            All rights reserved 2023 &copy; SSR Palace
        </div> 
    </div>
  )
}

export default Footer