import React from 'react'
import styles from '../styles/app.module.scss'
import Text from '../components/Text'
import Header from '../components/Header'
import { Col, Row, Container } from 'react-grid-system'
import locale from '../locales/en.json'
import Button from '../components/Button'
import Footer from '../components/Footer'

export default function Page() {
  return (
    <div className={styles.main}>
      <Container md fluid className={styles.mainHeader}>
        <Header active="contact" />
        <img
          src="/assets/logo.svg"
          className={styles.mainLogo}
          alt={locale.HEADER_BRAND}
        />

        <img
          src="/assets/legsFemale.svg"
          className={styles.mainImg}
          alt={locale.HEADER_BRAND}
        />
      </Container>
      <Container md className={styles.mainBody}>
        <Row>
          <Col md={5} offset={{ md: 1 }}>
            <div className={styles.mainBodyText}>
              <Text value={locale.HEADER_1} isBold variant="XL" />
              <Text value={locale.HEADER_2} variant="LG" />
              <Text value={locale.HEADER_3} variant="LG" />
              <Text value={locale.HEADER_4} variant="LG" />
            </div>
          </Col>
        </Row>
        <div className={styles.mainBodyScrollBtn}>
          <Col>
            <div className={styles.mainBodyScrollBtnText}>
              <Text value="MORE" variant="MD" />
            </div>
            <img src="/assets/down.svg" alt={locale.HEADER_BRAND} />
          </Col>
        </div>
      </Container>
      <div className={styles.mainBody2}>
        <Container md>
          <img
            src="/assets/legsMale.svg"
            className={styles.mainImg}
            alt={locale.HEADER_BRAND}
          />

          <Row>
            <Col md={5} offset={{ md: 7 }}>
              <div className={styles.mainBody2Text}>
                <img
                  src="/assets/brandingText.svg"
                  className={styles.mainLogo}
                  alt={locale.HEADER_BRAND}
                />

                <Text value="Being a young person is hard." isBold variant="XL" />
                <Text
                  value="Juggling pressures from school,
socialising, family-life and engaging
with the world can be difficult at the
best of times."
                  variant="XL"
                />
                <Text
                  value="Throw in challenges like a death or
separation in the family, bullying,
changing schools or any other
difficulties they may experience,
and it’s easy to understand why they
might need some extra support."
                  variant="LG"
                />
                <Text
                  value="Moo Therapy knows how tough this is,
we are experts at working with young
people who are feeling down, stressed
or just confused about life."
                  variant="LG"
                />
                <Text value="We are here to help." variant="LG" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.mainBody3}>
        <Container md>
          <Row>
            <Col sm={8} md={5} offset={{ sm: 1, md: 1 }}>
              <div className={styles.mainBody3Text}>
                <Text
                  value="Meet Michelle
(or ‘Moo’ if you prefer)"
                  isBold
                  variant="XL"
                />
                <Text
                  value="I’ve been working in child and adolescent mental
                  health for 10 years now, in local government, the
                  NHS and currently I work at the Priory hospital."
                  variant="XL"
                />
                <Button value="CONTACT ME" />
                <Footer />
              </div>
            </Col>
            <Col sm={8} md={4} offset={{ sm: 1, md: 1 }} style={{ margin: 'auto 0' }}>
              <img
                src="/assets/person.svg"
                className={styles.imgPerson}
                alt={locale.HEADER_BRAND}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
