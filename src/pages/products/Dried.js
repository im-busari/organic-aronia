import React from 'react'
import learnMoreDoc from '../../images/aronia.pdf'
import driedImg from '../../images/aronia-dried.JPG'
import bushImg from '../../images/juice.jpg'

export default function Dried(props) {

    const { t } = props

    return (
        <div className="row bg-white no-gutters py-5 px-2">

            <div className="col-sm-4 col-12 pb-5 px-lg-5 px-1 lead">

                <img src={driedImg} className="img-fluid p-2 shadow mx-auto d-block" style={{maxWidth: "100%"}} alt="Juice"></img>

                <ul className="list-group list-group-flush py-5">
                    <li className="list-group-item"> <i className="fas fa-check text-success"></i> Без консерванти </li>
                    <li className="list-group-item"> <i className="fas fa-check text-success"></i> Без оцветители </li>
                    <li className="list-group-item"> <i className="fas fa-check text-success"></i> Биологично чист продукт </li>
                </ul>

                <img src={bushImg} className="img-fluid p-2 shadow mx-auto d-block" style={{maxWidth: "100%"}} alt="Juice"></img>

            </div>

            <div className="col-sm-8 lead col-12 px-2">
                <p>
                Сушените плодове от био-арония са удобни за съхранение и консумация. Вкусът им е стипчив и сладък, и са чудесна добавка към ежедневното меню заради богатството си на антиоксиданти.
                </p>

                <h5> Приложение </h5>
                <p> Пресните плодове на добре узрялата арония се почистват от дръжките и се съхраняват при подходяща температура, за да се изсушат. Малките вкусни ядки на аронията са готови за директна консумация. Те се използват и при направата на различни ястия, плодови салати и конфитюри. В гастономията намират широко приложение като естествен източник на цветни пигменти. Повечето полезни съставки на плода се запазват при процеса на изсушаване. Затова се смята, че здравословното им действие се припокрива с това на други продукти от арония (сок, пресен плод, и др.). Консумацията им се препоръчва предимно при диабет, сърдечно-съдови заболявания и метаболитен синдром.</p>
                <a href={learnMoreDoc} id="learnMore" target="_blank" rel="noopener noreferrer"> Научете повече за здравословното действие на аронията. </a>
                
                <hr></hr>

                <h5> Съхранение </h5>
                <p>Сухата арония се съхранява в сухи и проветриви помещения.</p>

                <hr></hr>

                <h5> Рецепти </h5>
                <p className="font-italic">Чай от арония (без захар) за диабетици:</p>
                <p>1 супена лъжица натрошени сушени плодове се заливат с 1 чаша вряла вода, престояват 30 минути и се филтрират. Приемат се 2-3 с.л. 3 пъти на ден. Съхранява се на хладно място.</p>
                <hr></hr>

                <h5>Забележка</h5>
                <p> Няма доказателство, че приема на арония повлиява здравето на човека негативно. Популярната препоръка за ограничаване на приема на тази билка при гастрит е необоснована. Учени са наблюдавали дори защитен ефект на приема на арония върху стомашната тъкан при гастрит, индуциран от приема на алкохол (етанол). </p>
            </div>
                        
        </div>
    )
}
