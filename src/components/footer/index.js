import Image from "next/image";
import Link from "next/link";
import pixImg from "../../assets/image/footer/pix.webp";
import boletoImg from "../../assets/image/footer/boleto.png";
import hiperCardImg from "../../assets/image/footer/hipercard.png";
import visaImg from "../../assets/image/footer/visa.png";
import masterCardImg from "../../assets/image/footer/mastercard.png";
import eloImg from "../../assets/image/footer/elo.png";
import Icon from "@mdi/react";
import { mdiFacebook, mdiInstagram, mdiLinkedin, mdiYoutube } from "@mdi/js";


export function Footer(){
    return(
        <footer>
            <div className="footer-container">
                <div className="footer-column">
                    <h2>Sobre nós</h2>
                    <ul>
                        <li>
                            <Link href="#" style={{textDecoration: 'unset', color: 'unset'}}>
                                Sobre a VierCa
                            </Link>
                        </li>
                        <li>
                            <Link href="#" style={{textDecoration: 'unset', color: 'unset'}}>
                                Nosso blog
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h2>Informações</h2>
                    <ul>
                        <li>
                            <Link href="#" style={{textDecoration: 'unset', color: 'unset'}}>
                                Preços e planos
                            </Link>
                        </li>
                        <li>
                            <Link href="#" style={{textDecoration: 'unset', color: 'unset'}}>
                                Feedback dos clientes
                            </Link>
                        </li>
                        <li>
                            <Link href="#" style={{textDecoration: 'unset', color: 'unset'}}>
                                Implementação de chatbot
                            </Link>
                        </li>
                        <li>
                            <Link href="#" style={{textDecoration: 'unset', color: 'unset'}}>
                                Tecnologias utilizadas
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h2>Sites</h2>
                    <ul>
                        <li>
                            <Link href="#" style={{textDecoration: 'unset', color: 'unset'}}>
                                Onde será hospedado?
                            </Link>
                        </li>
                        <li>
                            <Link href="#" style={{textDecoration: 'unset', color: 'unset'}}>
                                Sites em WordPress
                            </Link>
                        </li>
                        <li>
                            <Link href="#" style={{textDecoration: 'unset', color: 'unset'}}>
                                Landing Page
                            </Link>
                        </li>
                        <li>
                            <Link href="#" style={{textDecoration: 'unset', color: 'unset'}}>
                                E-Commerce
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h2>Suporte</h2>
                    <ul>
                        <li>
                            <Link href="#" style={{textDecoration: 'unset', color: 'unset'}}>
                                Fale conosco
                            </Link>
                        </li>
                        <li>
                            <Link href="#" style={{textDecoration: 'unset', color: 'unset'}}>
                                (11) 96738-1402
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-social">
                <div className="payments-and-social">
                    <div className="payments">
                        <span>
                            <Image src={pixImg} fill alt="" title=""></Image>
                        </span>
                        <span>
                            <Image src={boletoImg} fill alt="" title=""></Image>
                        </span>
                        <span>
                            <Image src={masterCardImg} fill alt="" title=""></Image>
                        </span>
                        <span>
                            <Image src={visaImg} fill alt="" title=""></Image>
                        </span>
                        <span>
                            <Image src={hiperCardImg} fill alt="" title=""></Image>
                        </span>
                        <span>
                            <Image src={eloImg} fill alt="" title=""></Image>
                        </span>
                    </div>
                    <ul className="socials">
                        <li>
                            <Link href="#" className="link">
                                <Icon path={mdiInstagram} size={1.2}></Icon>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="link">
                                <Icon path={mdiFacebook} size={1.2}></Icon>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="link">
                                <Icon path={mdiLinkedin} size={1.2}></Icon>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="link">
                                <Icon path={mdiYoutube} size={1.2}></Icon>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="links-and-logo">
                    <div className="links">
                        <ul>
                            <li>
                                <Link href="#" style={{color: 'unset', textDecoration: 'unset'}}>
                                    Termos de serviço
                                </Link>
                            </li>
                            <li>
                                <Link href="#" style={{color: 'unset', textDecoration: 'unset'}}>
                                    Política de privacidade
                                </Link>
                            </li>
                            <li>
                                <Link href="#" style={{color: 'unset', textDecoration: 'unset'}}>
                                    Política de reembolso
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="logo">
                        <div>
                            <Image src={"/android-chrome-512x512.png"} fill alt="" title=""></Image>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-rights">
                <small>
                    © 2024 <strong>VierCa</strong> todos os direitos reservados - Desenvolvimento de sites com chatbots e sistemas.
                </small>
            </div>
        </footer>
    )
}