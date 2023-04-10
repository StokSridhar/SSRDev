 
const Footer = () => {
  return (
    <div> 
      <div className="footerMenu">
          <div className="container">
             <div className="row">
                <div className="col-md-4">
                 <h5> SSR Palace</h5>
                  <p>
                  MM Layout, Shampura, Kaval Bairasandra, Bengaluru, Karnataka 560032</p> 
                </div>
                <div className="col-md-4">
                  <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Halls</li>
                    <li>Services</li>
                    <li>Gallery</li>
                    <li>Contact</li>
                  </ul>
                </div>
                <div className="col-md-4">
                    <ul className="footerContact">
                      <li>Phone: +91 8870001377</li>
                      <li>Email: contact@ssrpalace.com</li>
                    </ul>
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