import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{
        margin: "1rem 0",
        borderTop: "1px solid #eee",
    }}>
      <p style={{marginLeft:"10vw",textDecoration:"none",fontSize:"0.6rem"}}>Copyright © 2023 <Link to="https://github.com/qiankun521">qiankun521</Link>. All rights reserved.</p>
    </footer>
  )
}
export default Footer;