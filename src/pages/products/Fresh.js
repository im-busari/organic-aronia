import React from 'react'
import learnMoreDoc from '../../images/aronia.pdf'
import freshImg from '../../images/aronia-fresh.JPG'
import bushImg from '../../images/juice.jpg'

export default function Fresh(props) {

    const { t } = props

    return (
        <div className="row bg-white no-gutters py-5 px-2">

            <div className="col-sm-4 col-12 pb-5 px-lg-5 px-1 lead">

                <img src={freshImg} className="img-fluid p-2 shadow mx-auto d-block" style={{maxWidth: "100%"}} alt="Juice"></img>

                <ul className="list-group list-group-flush py-5">
                    <li className="list-group-item"> <i className="fas fa-check text-success"></i> Без пестициди </li>
                    <li className="list-group-item"> <i className="fas fa-check text-success"></i> Естествено зреене (слънцезреене) </li>
                    <li className="list-group-item"> <i className="fas fa-check text-success"></i> Биологично чист продукт </li>
                </ul>

                <img src={bushImg} className="img-fluid p-2 shadow mx-auto d-block" style={{maxWidth: "100%"}} alt="Juice"></img>

            </div>

            <div className="col-sm-8 lead col-12 px-2">
                <p>
                Прясната арония, която Ви предлагаме, е биологично чист продукт. Тя е плод на растения, расли на най-добрата земя в България, чернозема на Добруджа.
                </p>

                <h5> Приложение </h5>
                <p> Пресните арониеви плодове са със стипчив, но приятен сладък вкус. Те са богати на витамини и полифеноли, и служат като естествен източник на антиоксиданти. Плодовете се препоръчват за превенция и подпомагане на лечението на сърдечно-съдови заболявания, диабет тип 2 и др.</p>
                <a href={learnMoreDoc} id="learnMore" target="_blank" rel="noopener noreferrer"> Научете повече за здравословното действие на аронията. </a>
                
                <hr></hr>

                <h5> Съхранение </h5>
                <p>За разлика от плодовете на други овощни видове, тези на аронията могат да се съхраняват няколко седмици без специални изисквания към температурата на въздуха. Поставени в обикновени щайги на проветриво място, при стайна температура, те не загниват и не плесенясват, а постепенно засъхват. Ако искате плодовете да останат свежи за по-дълго време поставете ги в хладилник или ги замразете.</p>

                <hr></hr>

                <h5>Забележка</h5>
                <p> Няма доказателство, че приема на арония повлиява здравето на човека негативно. Популярната препоръка за ограничаване на приема на тази билка при гастрит е необоснована. Учени са наблюдавали дори защитен ефект на приема на арония върху стомашната тъкан при гастрит, индуциран от приема на алкохол (етанол). </p>
            </div>
                        
        </div>
    )
}
