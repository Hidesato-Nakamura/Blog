import React from "react"
import Image from "./customImage"

export default function Footer() {
  return (
    <div className="footer-box">
      <div className="links">
        <div className="official-site">
          <a
            href="http://affexion.jp"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: `#fff`, textDecoration: `none` }}
          >
            official site
          </a>
        </div>
        <div className="contact-infomation">
          <a
            href="https://cgmotion.affexion.jp/#inquiry"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image filename="email.png" />
          </a>
        </div>
        <div className="contact-infomation">
          <a
            href="https://twitter.com/affexionAR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image filename="twitter.png" />
          </a>
        </div>
        <div className="contact-infomation">
          <a
            href="https://www.instagram.com/afx_cgmotion/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image filename="instagram.png" />
          </a>
        </div>
        {/* <div>
      <Image filename="email.png"/>
      </div> */}
        {/* <img src="/images/icons/email.png" alt="" />
        <img src="/images/icons/twitter.png" alt="" />
        <img src="/images/icons/instagram.png" alt="" /> */}
      </div>
      <div className="infomations">
        <div className="adresses">
          <div>株式会社アフェクション</div>
          <div>〒370-0073　群馬県高崎市緑町2-14-4　M'sビル101号</div>
          <div>TEL：027-384-2225（代表）　　FAX：027-384-2226</div>
        </div>
        <div className="copy-write">
          <span role="img" aria-label="sheep">
            ©️
          </span>
          affexion INC ALL RIGHT RESERVED.
        </div>
      </div>
    </div>
  )
}
