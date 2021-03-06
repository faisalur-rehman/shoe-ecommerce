import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Privacy.css";
import mobileLogo from "../../image/mobile_logo.png";
import ResponsiveNavbar from "../ResponsiveNavbar/ResponsiveNavbar";
import PrivacyHeader from "../PrivacyHeader/PrivacyHeader";
import MorePrivacy from "../MorePrivacy/MorePrivacy";
import { useRef } from "react";
// import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";

const Privacy = () => {
  const [state, setstate] = useState("");
  const [morePrivacy, setMorePrivacy] = useState("no-privacy");
  const ref = useRef();
  // const privacy = morePrivacy ? "more-privacy" : "no-privacy";
  function handleClick() {
    setstate("responsive_bar");
  }
  function handleClose() {
    setstate("");
  }
  function handleArrowClick() {
    scroll.scrollToBottom();
    setMorePrivacy("more-privacy");
  }
  function handleMobileArrowClick() {
    setMorePrivacy("more-privacy");
    scroll.scrollToBottom();
  }
  return (
    <div>
      <section id="greater_then_mobile">
        <section class="privacy_page_section">
          <PrivacyHeader
            state={state}
            handleClick={handleClick}
            handleClose={handleClose}
          />
          <section
            class="privacy_body_section"
            style={{ backgroundColor: "black" }}
          >
            <div class="privacy_container">
              <div class="privacy_section_heading">
                <h3>privacy</h3>
              </div>
              <div class="privacy_section_contact_detail">
                <div class="privacy_section_contact_fields">
                  <p class="privacy_red_color">
                    Welche Daten werden von uns bei Nutzung unseres Online-Shops
                    erhoben und verarbeitet?
                  </p>
                </div>
                <div class="privacy_section_contact_fields">
                  <p>
                    Wenn Sie eine Anfrage an uns richten oder in unserem
                    Online-Shop Waren bestellen m??chten, ben??tigen und
                    verarbeiten wir bestimmte Daten, wie insbesondere die
                    Angaben zur von Ihnen ausgew??hlten oder vorgenommenen
                    Bestellung, zu Ihrer Adresse und E-Mail-Adresse und zur
                    gew??hlten Zahlungsweise. Sie haben die M??glichkeit, uns
                    erg??nzende Informationen wie eine Telefonnummer freiwillig
                    zu ??berlassen, um etwa eine raschere Kontaktaufnahme zu
                    erm??glichen.
                  </p>
                </div>
                <div class="privacy_section_contact_fields">
                  <p>
                    Sie k??nnen freiwillig ein Kundenkonto anlegen, durch das wir
                    Ihre Daten f??r sp??tere weitere Eink??ufe speichern k??nnen.
                    Bei Anlegung eines Kundenkontos unter ???Mein Konto??? werden
                    die von Ihnen angegebenen Daten f??r den Zeitraum des
                    Bestehens des Kundenkontos widerruflich gespeichert. Die
                    Rechtsgrundlage hierf??r findet sich in Art. 6 Abs. 1 a)
                    DS-GVO.
                  </p>
                </div>
                <div class="privacy_section_contact_fields">
                  <p>
                    Wir verarbeiten die uns ??berlassenen Daten f??r die
                    Vertragsdurchf??hrung, je nach gew??nschter Zahlungsweise f??r
                    eine vorvertragliche Pr??fung und f??r eine eventuelle
                    Bearbeitung von Gew??hrleistungsanspr??chen. Die
                    Rechtsgrundlage hierf??r findet sich in Art. 6 Abs. 1 c) und
                    f) DS-GVO.
                  </p>
                </div>
                <div class="privacy_section_contact_fields">
                  <p>
                    Zudem erhalten die von uns eingesetzten Dienstleister (wie
                    beispielsweise Logistikunternehmen, Zahlungsvermittler) die
                    jeweils notwendigen Daten zu Ihrer Person bzw. zu Ihrer
                    Bestellung. Je nach gew??hlter Zahlungsweise f??hren wir auch
                    Bonit??tspr??fungen durch. Ohne zutreffende Angaben
                    personenbezogener Daten k??nnen wir eine Annahme von
                    Bestellungen entweder gar nicht oder nur unter
                    eingeschr??nkter Auswahl bei den Zahlungsweisen anbieten.
                  </p>
                </div>

                <div class="privacy_section_contact_fields">
                  <p>
                    Im Rahmen des Betriebs unseres Unternehmens verarbeiten wir
                    Ihre Daten mittels unserer IT-Systeme. Teilweise bedienen
                    wir uns zur Verarbeitung Ihrer Daten externer Dienstleister.
                    Diese wurden von uns sorgf??ltig ausgew??hlt und beauftragt,
                    sind an unsere Weisungen gebunden und werden regelm????ig
                    kontrolliert.
                  </p>
                </div>
                <div class="privacy_section_contact_fields">
                  <p>
                    Wir k??nnen die von Ihnen angegebenen Daten zudem
                    verarbeiten, um Sie ??ber weitere interessante Produkte aus
                    unserem Portfolio zu informieren oder zu bestimmten Anl??ssen
                    mit Ihnen in Verbindung zu treten.
                  </p>
                </div>
              </div>

              <div class="privacy_down_arrow">
                <Link to="/more-privacy">
                  <i
                    class="fas fa-angle-double-down"
                    // onClick={handleArrowClick}
                  ></i>
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

        <section
          class="privacy_body_section"
          style={{ backgroundColor: "black" }}
        >
          <div class="privacy_container">
            <div class="privacy_section_heading">
              <h3>privacy</h3>
            </div>
            <div class="privacy_section_contact_detail">
              <div class="privacy_section_contact_fields">
                <p class="privacy_red_color">
                  Welche Daten werden von uns bei Nutzung unseres Online-Shops
                  erhoben und verarbeitet?
                </p>
              </div>
              <div class="privacy_section_contact_fields">
                <p>
                  Wenn Sie eine Anfrage an uns richten oder in unserem
                  Online-Shop Waren bestellen m??chten, ben??tigen und verarbeiten
                  wir bestimmte Daten, wie insbesondere die Angaben zur von
                  Ihnen ausgew??hlten oder vorgenommenen Bestellung, zu Ihrer
                  Adresse und E-Mail-Adresse und zur gew??hlten Zahlungsweise.
                  Sie haben die M??glichkeit, uns erg??nzende Informationen wie
                  eine Telefonnummer freiwillig zu ??berlassen, um etwa eine
                  raschere Kontaktaufnahme zu erm??glichen.
                </p>
              </div>
              <div class="privacy_section_contact_fields">
                <p>
                  Sie k??nnen freiwillig ein Kundenkonto anlegen, durch das wir
                  Ihre Daten f??r sp??tere weitere Eink??ufe speichern k??nnen. Bei
                  Anlegung eines Kundenkontos unter ???Mein Konto??? werden die von
                  Ihnen angegebenen Daten f??r den Zeitraum des Bestehens des
                  Kundenkontos widerruflich gespeichert. Die Rechtsgrundlage
                  hierf??r findet sich in Art. 6 Abs. 1 a) DS-GVO.
                </p>
              </div>
              <div class="privacy_section_contact_fields">
                <p>
                  Wir verarbeiten die uns ??berlassenen Daten f??r die
                  Vertragsdurchf??hrung, je nach gew??nschter Zahlungsweise f??r
                  eine vorvertragliche Pr??fung und f??r eine eventuelle
                  Bearbeitung von Gew??hrleistungsanspr??chen. Die Rechtsgrundlage
                  hierf??r findet sich in Art. 6 Abs. 1 c) und f) DS-GVO.
                </p>
              </div>
              <div class="privacy_section_contact_fields">
                <p>
                  Zudem erhalten die von uns eingesetzten Dienstleister (wie
                  beispielsweise Logistikunternehmen, Zahlungsvermittler) die
                  jeweils notwendigen Daten zu Ihrer Person bzw. zu Ihrer
                  Bestellung. Je nach gew??hlter Zahlungsweise f??hren wir auch
                  Bonit??tspr??fungen durch. Ohne zutreffende Angaben
                  personenbezogener Daten k??nnen wir eine Annahme von
                  Bestellungen entweder gar nicht oder nur unter eingeschr??nkter
                  Auswahl bei den Zahlungsweisen anbieten.
                </p>
              </div>

              <div class="privacy_section_contact_fields">
                <p>
                  Im Rahmen des Betriebs unseres Unternehmens verarbeiten wir
                  Ihre Daten mittels unserer IT-Systeme. Teilweise bedienen wir
                  uns zur Verarbeitung Ihrer Daten externer Dienstleister. Diese
                  wurden von uns sorgf??ltig ausgew??hlt und beauftragt, sind an
                  unsere Weisungen gebunden und werden regelm????ig kontrolliert.
                </p>
              </div>
              <div class="privacy_section_contact_fields">
                <p>
                  Wir k??nnen die von Ihnen angegebenen Daten zudem verarbeiten,
                  um Sie ??ber weitere interessante Produkte aus unserem
                  Portfolio zu informieren oder zu bestimmten Anl??ssen mit Ihnen
                  in Verbindung zu treten.
                </p>
              </div>
            </div>

            <div class="privacy_down_arrow">
              <Link to="/more-privacy">
                <i
                  class="fas fa-angle-double-down"
                  // onClick={handleMobileArrowClick}
                ></i>
              </Link>
            </div>
          </div>
        </section>
      </section>

      <ResponsiveNavbar state={state} handleClose={handleClose} />
    </div>
  );
};

export default Privacy;
