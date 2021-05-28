import ServiceStc from './Service.stc'
const Service=()=>{
    return(
        <ServiceStc className="services-section">
			<div className="container">
				<div className="services-box">
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="services-post">
								<img src="/img/icon1.png" alt="" />
								<h3>Fresh Ingredients</h3>
								<p>Sed egestas, ante vulputa eros pede vitae luctus metus augue.</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="services-post">
								<img src="/img/icon2.png" alt="" />
								<h3>Best Recipe</h3>
								<p>Sed egestas, ante vulputa eros pede vitae luctus metus augue.</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="services-post">
								<img src="/img/icon3.png" alt="" />
								<h3>Happy Clients</h3>
								<p>Sed egestas, ante vulputa eros pede vitae luctus metus augue.</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="services-post">
								<img src="/img/icon4.png" alt="" />
								<h3>Vegan Menu</h3>
								<p>Sed egestas, ante vulputa eros pede vitae luctus metus augue.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</ServiceStc>
    )
}
export default Service