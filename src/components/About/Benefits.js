import React from 'react'

export default function Benefits(props) {
    
    const { t } = props 

    return (
        <div className="bg-black aronia-mela text-white pl-5 pr-5" id="aronia-benefits">

            <h1 className="text-left text-uppercase m-5 pt-5 pb-5"> { t("about.aronia.header")} </h1>

            <ul className="nav nav-tabs m-5 lead">
                    <li className="nav-item">
                        <a href="#aronia" className="nav-link active" id="tab-button-aronia" data-toggle="tab"> { t("about.aronia.btn-aronia")} </a>
                    </li>
                    <li className="nav-item">
                        <a href="#history" className="nav-link" id="tab-button-aronia" data-toggle="tab"> { t("about.aronia.btn-history")} </a>
                    </li>
                    <li className="nav-item">
                        <a href="#cure" className="nav-link" id="tab-button-aronia" data-toggle="tab"> { t("about.aronia.btn-curative")} </a>
                    </li>
                    <li className="nav-item">
                        <a href="#cultivation" className="nav-link" id="tab-button-aronia" data-toggle="tab"> { t("about.aronia.btn-cultivation")} </a>
                    </li>
                </ul>
                <div className="tab-content m-5 pb-5 lead">

                    <div className="tab-pane fade show active" id="aronia">
                        <p> 
                            { t("about.aronia.what-is.p-1")}
                        </p>
                        <p>
                            { t("about.aronia.what-is.p-2")}
                        </p>
                    </div>

                    <div className="tab-pane fade" id="history">
                        <p> 
                            { t("about.aronia.history.p-1")}
                        </p>
                        <p>
                            { t("about.aronia.history.p-2")}
                        </p>
                    </div>
                    <div className="tab-pane fade" id="cure">
                        <p>
                            { t("about.aronia.curative.p-1")}
                        </p>
                        <p>
                            { t("about.aronia.curative.p-2")}
                        </p>
                        <p>
                            { t("about.aronia.curative.p-3")}
                        </p>
                    </div>
                    <div className="tab-pane fade" id="cultivation">

                        <h5> { t("about.aronia.cultivation.h-plant")} </h5>
                        <p>
                            { t("about.aronia.cultivation.p-plant")}
                        </p>

                        <h5> { t("about.aronia.cultivation.h-water")} </h5>
                        <p>
                            { t("about.aronia.cultivation.p-water")}
                        </p>

                        <h5> { t("about.aronia.cultivation.h-prun")} </h5>
                        <p>
                            { t("about.aronia.cultivation.p-prun")}
                        </p>
                        
                    </div>
                </div>
            
        </div>
    )
}
