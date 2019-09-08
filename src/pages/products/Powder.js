import React from 'react'
import learnMoreDoc from '../../images/aronia.pdf'
import powderImg from '../../images/powder.jpg'
import milkImg from '../../images/milk-powder.jpg'

export default function Powder(props) {

    const { t } = props

    return (
        <div className="row bg-white no-gutters py-5 px-2">

            <div className="col-sm-4 col-12 pb-5 px-lg-5 px-1 lead">

                <img src={powderImg} className="img-fluid p-2 shadow mx-auto d-block" style={{maxWidth: "100%"}} alt="Juice"></img>

                <ul className="list-group list-group-flush py-5">
                    <li className="list-group-item"> <i className="fas fa-check text-success"></i> Без добавени оцветители </li>
                    <li className="list-group-item"> <i className="fas fa-check text-success"></i> Без добавени аромати </li>
                    <li className="list-group-item"> <i className="fas fa-check text-success"></i> Без консерванти </li>
                    <li className="list-group-item"> <i className="fas fa-check text-success"></i> Биологично чист продукт </li>
                </ul>

                <img src={milkImg} className="img-fluid p-2 shadow mx-auto d-block" style={{maxWidth: "100%"}} alt="Juice"></img>

            </div>

            <div className="col-sm-8 lead col-12 px-2">
                <p>
                Прахът от био-арония е без добавени консерванти и оцветители. Той се състои от микронизирана сушена органична арония.
                </p>

                <h5> Приложение </h5>
                <p> Прахът от арония се добавя в киселото мляко или в брашното (при различни печива). Той придава по този начин уникален вкус на различните ястия. Прахът се усвоява лесно от организма и допринася за неговото укрепване. Аронията нормализира метаболизма и повлиява позитивно редица тъкани (нервна, стомашно-чревна, и др.). Консумацията й се препоръчва предимно при диабет, кардио-васкулярни заболявания и метаболитен синдром.</p>
                <p>Препоръчителна доза: два пъти на ден като междинно хранене, по половин кафена лъжичка в чаена чаша кисело мляко.</p>
                <a href={learnMoreDoc} id="learnMore" target="_blank" rel="noopener noreferrer"> Научете повече за здравословното действие на аронията. </a>
                
                <hr></hr>

                <h5> Съхранение </h5>
                <p>Прахът от арония се съхранява в сухи и проветриви помещения.</p>

                <hr></hr>

                <h5>Забележка</h5>
                <p> Няма доказателство, че приема на арония повлиява здравето на човека негативно. Популярната препоръка за ограничаване на приема на тази билка при гастрит е необоснована. Учени са наблюдавали дори защитен ефект на приема на арония върху стомашната тъкан при гастрит, индуциран от приема на алкохол (етанол). </p>
            </div>
                        
        </div>
    )
}
