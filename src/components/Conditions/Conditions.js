import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import mobileLogo from "../../image/mobile_logo.png";
import "./Conditions.css";

const Conditions = () => {
  const [state, setstate] = useState("");
  function handleClick() {
    setstate("responsive_bar");
  }
  function handleClose() {
    setstate("");
  }
  return (
    <div>
      <section id="greater_then_mobile" style={{ backgroundColor: "black" }}>
        <section class="agb_page_section">
          <Sidebar />

          <section class="agb_body_section">
            <div class="agb_container">
              <div class="agb_section_heading">
                <h3>agb</h3>
              </div>
              <div class="agb_section_contact_detail">
                <div class="agb_section_contact_fields">
                  <p class="agb_red_color">§ 1 geltungsbereich, kunden</p>
                </div>
                <div class="agb_section_contact_fields">
                  <p>
                    Kunden des Unternehmens im Sinne dieser Allgemeinen
                    Geschäftsbedingungen sind sowohl Verbraucher als auch
                    Unternehmer. Unternehmer im Sinne des § 14 BGB sind
                    natürliche oder juristische Personen oder rechtsfähige
                    Personengesellschaften, die bei Abschluss eines
                    Rechtsgeschäftes in Ausübung ihrer gewerblichen oder
                    selbstständigen beruflichen Tätigkeit handeln. Verbraucher
                    im Sinne des § 13 BGB sind natürliche Personen, die ein
                    Rechtsgeschäft zu einem Zweck abschließen, der überwiegend
                    weder ihrer gewerblichen noch ihrer selbständigen
                    beruflichen Tätigkeit zugerechnet werden kann.
                  </p>
                </div>
                <div class="agb_section_contact_fields">
                  <p class="agb_red_color">
                    § 2 Angebote und Vertragsschluss über die Internetseite des
                    Unternehmens
                  </p>
                </div>
                <div class="agb_section_contact_fields">
                  <p>
                    Alle Angebote des Unternehmens sind freibleibend und
                    unverbindlich. Ein Vertrag zwischen dem Unternehmen und dem
                    Kunden kommt erst zustande, wenn das Unternehmen ein Angebot
                    eines Kunden annimmt. Bei Schreib- und Rechenfehlern sowie
                    Irrtümern auf der Internetseite behält sich das Unternehmen
                    das Recht vor, eine Bestellung nicht anzunehmen.
                  </p>
                </div>
                <div class="agb_section_contact_fields">
                  <p class="agb_red_color">
                    § 3 Zahlungsbedingungen und Preise
                  </p>
                </div>

                <div class="agb_section_contact_fields">
                  <p>
                    Die Bezahlung der vom Kunden bestellten Ware erfolgt per
                    PayPal, per Kreditkarte, Google Pay oder Apple Pay. Die
                    Zahlungen des Kunden sind, sofern im Folgenden nicht anders
                    angegeben, spätestens innerhalb von 14 Tagen nach
                    Vertragsschluss fällig. Die Belastung des Kontos des Kunden
                    erfolgt im Anschluss an die Durchführung des
                    Zahlungsvorgangs.
                  </p>
                </div>
              </div>

              <div class="agb_down_arrow">
                <a href="#">
                  <i class="fas fa-angle-double-down"></i>
                </a>
              </div>
            </div>
          </section>
        </section>
      </section>

      <section class="Mobile_home_section">
        <div class="mobile_header">
          <div class="shopping_cart">
            <i class="fas fa-shopping-bag"></i>
          </div>
          <div class="logo">
            <a href="index.html">
              <img src={mobileLogo} alt="" />
            </a>
          </div>
          <div class="nav_icon">
            <a class="open_close_nav">
              <i class="fas fa-bars" onClick={handleClick}></i>
            </a>
          </div>
        </div>

        <section class="agb_body_section" style={{ backgroundColor: "black" }}>
          <div class="agb_container">
            <div class="agb_section_heading">
              <h3>agb</h3>
            </div>
            <div class="agb_section_contact_detail">
              <div class="agb_section_contact_fields">
                <p class="agb_red_color">§ 1 geltungsbereich, kunden</p>
              </div>
              <div class="agb_section_contact_fields">
                <p>
                  Kunden des Unternehmens im Sinne dieser Allgemeinen
                  Geschäftsbedingungen sind sowohl Verbraucher als auch
                  Unternehmer. Unternehmer im Sinne des § 14 BGB sind natürliche
                  oder juristische Personen oder rechtsfähige
                  Personengesellschaften, die bei Abschluss eines
                  Rechtsgeschäftes in Ausübung ihrer gewerblichen oder
                  selbstständigen beruflichen Tätigkeit handeln. Verbraucher im
                  Sinne des § 13 BGB sind natürliche Personen, die ein
                  Rechtsgeschäft zu einem Zweck abschließen, der überwiegend
                  weder ihrer gewerblichen noch ihrer selbständigen beruflichen
                  Tätigkeit zugerechnet werden kann.
                </p>
              </div>
              <div class="agb_section_contact_fields">
                <p class="agb_red_color">
                  § 2 Angebote und Vertragsschluss über die Internetseite des
                  Unternehmens
                </p>
              </div>
              <div class="agb_section_contact_fields">
                <p>
                  Alle Angebote des Unternehmens sind freibleibend und
                  unverbindlich. Ein Vertrag zwischen dem Unternehmen und dem
                  Kunden kommt erst zustande, wenn das Unternehmen ein Angebot
                  eines Kunden annimmt. Bei Schreib- und Rechenfehlern sowie
                  Irrtümern auf der Internetseite behält sich das Unternehmen
                  das Recht vor, eine Bestellung nicht anzunehmen.
                </p>
              </div>
              <div class="agb_section_contact_fields">
                <p class="agb_red_color">§ 3 Zahlungsbedingungen und Preise</p>
              </div>

              <div class="agb_section_contact_fields">
                <p>
                  Die Bezahlung der vom Kunden bestellten Ware erfolgt per
                  PayPal, per Kreditkarte, Google Pay oder Apple Pay. Die
                  Zahlungen des Kunden sind, sofern im Folgenden nicht anders
                  angegeben, spätestens innerhalb von 14 Tagen nach
                  Vertragsschluss fällig. Die Belastung des Kontos des Kunden
                  erfolgt im Anschluss an die Durchführung des Zahlungsvorgangs.
                </p>
              </div>
            </div>

            <div class="agb_down_arrow">
              <a href="#">
                <i class="fas fa-angle-double-down"></i>
              </a>
            </div>
          </div>
        </section>
      </section>

      <section class={`responsive_nav_bar ${state}`}>
        <section class="responsive_nav_page_section">
          <div class="responsive_header">
            <div class="responsive_nav_icon">
              <a class="open_close_nav" onClick={handleClose}>
                <i class="fas fa-times"></i>
              </a>
            </div>

            <div class="responsive_logo">
              <span>REACH YOUR</span>
              <span class="responsive_logo_middle_part">
                <a href="index.html">
                  <small>R</small>
                  <small>Y</small>
                  <small>H</small>
                  <small>L</small>
                </a>
              </span>
              <span>HIGHEST LEVEL</span>
            </div>

            <div class="responsive_insta_icon">
              <i class="fab fa-instagram"></i>
            </div>
          </div>

          <section class="responsive_nav_details">
            <div class="responsive_nav_details_secion_one">
              <span>
                <a href="index.html">start</a>
              </span>
              <span>
                <a href="raffle.html">RAFFLE</a>
              </span>
              <span>
                {" "}
                <a href="sneaker.html">SNEAKERS</a>
              </span>
              <span>
                {" "}
                <a href="sign_up.html">Sign up</a>
              </span>
              <span>
                {" "}
                <a href="account_setting.html">Account</a>
              </span>
              <span>
                <a href="login.html">login</a>
              </span>
            </div>
            <div class="responsive_nav_details_secion_two">
              <ul>
                <li>
                  <a href="impressum.html">IMPRESSUM</a>
                </li>
                <li>
                  <a href="shipping.html">SHIPPING</a>
                </li>
                <li>
                  <a href="contact.html">CONTACT</a>
                </li>
              </ul>
            </div>
            <div class="responsive_nav_details_secion_three">
              <ul>
                <li>
                  <a href="privacy.html">privacy</a>
                </li>
                <li>
                  <a href="agb.html">agb</a>
                </li>
              </ul>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Conditions;
