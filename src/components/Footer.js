import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import sourcePDF from '../images/source_bg.pdf'

export default function Footer(props) {

    const { t } = props

    return (
        <footer className="footer bg-light ">
    <div className="container">
      <div className="row pt-5 pb-5">
        <div className="col-lg-9 h-100 text-center text-lg-left my-auto">
          <ul className="list-inline mb-2">

            {/* <li className="list-inline-item">
              <Link to='/about'> { t("home.footer.link-one") } </Link>
            </li>
            <li className="list-inline-item">⋅</li> */}
            
            <li className="list-inline-item">
              <Link to='/contacts'>{ t("home.footer.link-two") }</Link>
            </li>
            <li className="list-inline-item">⋅</li>
            <li className="list-inline-item">
              <Link to='/about#organic-farming'>{ t("home.footer.link-four") }</Link>
            </li>
            <li className="list-inline-item">⋅</li>
            <li className="list-inline-item">
              <Link to='/about#aronia-benefits'>{ t("home.footer.link-five") }</Link>
            </li>
            <li className="list-inline-item">⋅</li>
            <li className="list-inline-item">
              <Link to='/about#about-team'>{ t("home.footer.link-six") }</Link>
            </li>
            <li className="list-inline-item">⋅</li>
            <li className="list-inline-item">
              <a href={sourcePDF} id="link-six" target="_blank" rel="noopener noreferrer">{ t("home.footer.link-seven") }</a>
            </li>
          </ul>
          <p className="text-muted small mb-4 mb-lg-0">© { t("home.footer.copyrights")} </p>
        </div>
        <div className="col-lg-3 h-100 text-center text-lg-right my-auto">
          <ul className="list-inline mb-0">
            <li className="list-inline-item mr-3">
              <a href="https://www.facebook.com/OrganicAroniaBG/" target="__blank" rel="noopener noreferrer" id="fb-page">
                <i className="fab fa-facebook fa-2x fa-fw"></i>
              </a>
            </li>
            <li className="list-inline-item mr-3">
              <a href="https://twitter.com/organicaroniabg" target="__blank" rel="noopener noreferrer" id="twitter-page">
                <i className="fab fa-twitter-square fa-2x fa-fw"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/company/organic-aronia/about/" target="__blank" rel="noopener noreferrer" id="linkedin-page">
                <i className="fab fa-linkedin fa-2x fa-fw"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    )
}
