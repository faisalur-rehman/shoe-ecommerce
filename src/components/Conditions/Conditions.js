import React, { useState } from "react";
import mobileLogo from "../../image/mobile_logo.png";
import "./Conditions.css";
import ResponsiveNavbar from "../ResponsiveNavbar/ResponsiveNavbar";
import PrivacyHeader from "../PrivacyHeader/PrivacyHeader";
import MoreConditions from "../MoreConditions/MoreConditions";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";

const Conditions = () => {
  const [state, setstate] = useState("");
  const [morePrivacy, setMorePrivacy] = useState("no-conditions");
  function handleClick() {
    setstate("responsive_bar");
  }
  function handleClose() {
    setstate("");
  }
  function handleArrowClick() {
    scroll.scrollToBottom();
    setMorePrivacy("more-conditions");
  }
  function handleMobileArrowClick() {
    setMorePrivacy("more-conditions");
    scroll.scrollToBottom();
  }
  return (
    <div>
      <section id="greater_then_mobile">
        <section class="agb_page_section">
          <PrivacyHeader
            state={state}
            handleClick={handleClick}
            handleClose={handleClose}
          />

          <section
            class="agb_body_section"
            style={{ backgroundColor: "black" }}
          >
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
                <Link to="/more-conditions">
                  <i class="fas fa-angle-double-down"></i>
                </Link>
              </div>
            </div>
          </section>
        </section>
      </section>

      <section class="Mobile_home_section">
        <div
          class="mobile_header"
          style={{ backgroundColor: "black", borderColor: "white" }}
        >
          <div class="shopping_cart">
            <i class="fas fa-shopping-bag" style={{ color: "white" }}></i>
          </div>
          <div class="logo">
            <a href="index.html">
              <img
                src={mobileLogo}
                alt=""
                style={{ backgroundColor: "white", borderRadius: "50%" }}
              />
            </a>
          </div>
          <div class="nav_icon">
            <a class="open_close_nav">
              <i
                class="fas fa-bars"
                onClick={handleClick}
                style={{ color: "white" }}
              ></i>
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
              <Link to="/more-conditions">
                <i class="fas fa-angle-double-down"></i>
              </Link>
            </div>
          </div>
        </section>
      </section>

      <ResponsiveNavbar state={state} handleClose={handleClose} />
    </div>
  );
};

export default Conditions;
