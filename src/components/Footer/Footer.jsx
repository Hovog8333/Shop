import React from 'react'


const Footer = () => {

  return (
    <div className='Footer' >
      <h5 className="footertext"> crated by <span>Marat Avanesyan  </span>| All rights reserved</h5>
      <div className="icons">
        {/* https://github.com/maratavanesyan123 */}
     <a href='https://www.instagram.com/maratavanesyan127/' target="_blank" ><i className="fa-brands fa-instagram"></i></a>
     <a href='https://t.me/maratavanesyan/' target="_blank" ><i className="fa-brands fa-telegram"></i></a>
     <a href='https://github.com/maratavanesyan123' target="_blank" ><i className="fa-brands fa-github"></i></a>
     <a href='https://www.linkedin.com/in/maratavanesyan/' target="_blank" ><i className="fa-brands fa-linkedin"></i></a>
      </div>
    </div>
  )
}

export default Footer