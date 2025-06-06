import Image from "next/image";
import Link from "next/link";

export function Header(){
  return(
   <header>
      <nav>
         <Link className="logo" href="/">
            <Image src="/android-chrome-512x512.png" title="" alt="" fill style={{objectFit: 'contain'}}/>
         </Link>
         <div className="menu-desk">
            <div className="navigation">
               <ul>
                  <li><Link href="#" className="nav-link">Explorar</Link></li>
                  <li><Link href="/precos" className="nav-link">Preços</Link></li>
                  <li><Link href="#" className="nav-link">Serviços</Link></li>
                  <li><Link href="#" className="nav-link">Contato</Link></li>
               </ul>
            </div>
            <div className="login">
               <div className="language">
                  <div>
                     <Image src="/brazil-flag.jpg" fill title="" alt="" objectFit="contain"/>
                  </div>
                  <span>
                     Português
                  </span>
               </div>
               <div className="button-login">
                  <button>Entrar</button>
               </div>
            </div>
         </div>
         <div className="menu-mobile"></div>
      </nav>
   </header>
  )
}