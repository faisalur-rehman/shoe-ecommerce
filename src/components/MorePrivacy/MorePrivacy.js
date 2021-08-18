import React, { useState } from "react";
import PrivacyHeader from "../PrivacyHeader/PrivacyHeader";
import ResponsiveNavbar from "../ResponsiveNavbar/ResponsiveNavbar";
import mobileLogo from "../../image/mobile_logo.png";

const MorePrivacy = () => {
  const [state, setstate] = useState("");
  function handleClick() {
    setstate("responsive_bar");
  }
  function handleClose() {
    setstate("");
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
                    Online-Shop Waren bestellen möchten, benötigen und
                    verarbeiten wir bestimmte Daten, wie insbesondere die
                    Angaben zur von Ihnen ausgewählten oder vorgenommenen
                    Bestellung, zu Ihrer Adresse und E-Mail-Adresse und zur
                    gewählten Zahlungsweise. Sie haben die Möglichkeit, uns
                    ergänzende Informationen wie eine Telefonnummer freiwillig
                    zu überlassen, um etwa eine raschere Kontaktaufnahme zu
                    ermöglichen.
                  </p>
                </div>
                <div class="privacy_section_contact_fields">
                  <p>
                    Sie können freiwillig ein Kundenkonto anlegen, durch das wir
                    Ihre Daten für spätere weitere Einkäufe speichern können.
                    Bei Anlegung eines Kundenkontos unter „Mein Konto“ werden
                    die von Ihnen angegebenen Daten für den Zeitraum des
                    Bestehens des Kundenkontos widerruflich gespeichert. Die
                    Rechtsgrundlage hierfür findet sich in Art. 6 Abs. 1 a)
                    DS-GVO.
                  </p>
                </div>
                <div class="privacy_section_contact_fields">
                  <p>
                    Wir verarbeiten die uns überlassenen Daten für die
                    Vertragsdurchführung, je nach gewünschter Zahlungsweise für
                    eine vorvertragliche Prüfung und für eine eventuelle
                    Bearbeitung von Gewährleistungsansprüchen. Die
                    Rechtsgrundlage hierfür findet sich in Art. 6 Abs. 1 c) und
                    f) DS-GVO.
                  </p>
                </div>
                <div class="privacy_section_contact_fields">
                  <p>
                    Zudem erhalten die von uns eingesetzten Dienstleister (wie
                    beispielsweise Logistikunternehmen, Zahlungsvermittler) die
                    jeweils notwendigen Daten zu Ihrer Person bzw. zu Ihrer
                    Bestellung. Je nach gewählter Zahlungsweise führen wir auch
                    Bonitätsprüfungen durch. Ohne zutreffende Angaben
                    personenbezogener Daten können wir eine Annahme von
                    Bestellungen entweder gar nicht oder nur unter
                    eingeschränkter Auswahl bei den Zahlungsweisen anbieten.
                  </p>
                </div>

                <div class="privacy_section_contact_fields">
                  <p>
                    Im Rahmen des Betriebs unseres Unternehmens verarbeiten wir
                    Ihre Daten mittels unserer IT-Systeme. Teilweise bedienen
                    wir uns zur Verarbeitung Ihrer Daten externer Dienstleister.
                    Diese wurden von uns sorgfältig ausgewählt und beauftragt,
                    sind an unsere Weisungen gebunden und werden regelmäßig
                    kontrolliert.
                  </p>
                </div>
                <div class="privacy_section_contact_fields">
                  <p>
                    Wir können die von Ihnen angegebenen Daten zudem
                    verarbeiten, um Sie über weitere interessante Produkte aus
                    unserem Portfolio zu informieren oder zu bestimmten Anlässen
                    mit Ihnen in Verbindung zu treten.
                  </p>
                </div>
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
                  Online-Shop Waren bestellen möchten, benötigen und verarbeiten
                  wir bestimmte Daten, wie insbesondere die Angaben zur von
                  Ihnen ausgewählten oder vorgenommenen Bestellung, zu Ihrer
                  Adresse und E-Mail-Adresse und zur gewählten Zahlungsweise.
                  Sie haben die Möglichkeit, uns ergänzende Informationen wie
                  eine Telefonnummer freiwillig zu überlassen, um etwa eine
                  raschere Kontaktaufnahme zu ermöglichen.
                </p>
              </div>
              <div class="privacy_section_contact_fields">
                <p>
                  Sie können freiwillig ein Kundenkonto anlegen, durch das wir
                  Ihre Daten für spätere weitere Einkäufe speichern können. Bei
                  Anlegung eines Kundenkontos unter „Mein Konto“ werden die von
                  Ihnen angegebenen Daten für den Zeitraum des Bestehens des
                  Kundenkontos widerruflich gespeichert. Die Rechtsgrundlage
                  hierfür findet sich in Art. 6 Abs. 1 a) DS-GVO.
                </p>
              </div>
              <div class="privacy_section_contact_fields">
                <p>
                  Wir verarbeiten die uns überlassenen Daten für die
                  Vertragsdurchführung, je nach gewünschter Zahlungsweise für
                  eine vorvertragliche Prüfung und für eine eventuelle
                  Bearbeitung von Gewährleistungsansprüchen. Die Rechtsgrundlage
                  hierfür findet sich in Art. 6 Abs. 1 c) und f) DS-GVO.
                </p>
              </div>
              <div class="privacy_section_contact_fields">
                <p>
                  Zudem erhalten die von uns eingesetzten Dienstleister (wie
                  beispielsweise Logistikunternehmen, Zahlungsvermittler) die
                  jeweils notwendigen Daten zu Ihrer Person bzw. zu Ihrer
                  Bestellung. Je nach gewählter Zahlungsweise führen wir auch
                  Bonitätsprüfungen durch. Ohne zutreffende Angaben
                  personenbezogener Daten können wir eine Annahme von
                  Bestellungen entweder gar nicht oder nur unter eingeschränkter
                  Auswahl bei den Zahlungsweisen anbieten.
                </p>
              </div>

              <div class="privacy_section_contact_fields">
                <p>
                  Im Rahmen des Betriebs unseres Unternehmens verarbeiten wir
                  Ihre Daten mittels unserer IT-Systeme. Teilweise bedienen wir
                  uns zur Verarbeitung Ihrer Daten externer Dienstleister. Diese
                  wurden von uns sorgfältig ausgewählt und beauftragt, sind an
                  unsere Weisungen gebunden und werden regelmäßig kontrolliert.
                </p>
              </div>
              <div class="privacy_section_contact_fields">
                <p>
                  Wir können die von Ihnen angegebenen Daten zudem verarbeiten,
                  um Sie über weitere interessante Produkte aus unserem
                  Portfolio zu informieren oder zu bestimmten Anlässen mit Ihnen
                  in Verbindung zu treten.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <ResponsiveNavbar state={state} handleClose={handleClose} />
    </div>
  );
};

export default MorePrivacy;
