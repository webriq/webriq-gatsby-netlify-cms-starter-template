import React from "react"
import { Link } from "gatsby"
import income from "../../images/incomes.png"
import team from "../../images/men-group-outline.png"
import services from "../../images/customer-support.png"
import dark from "../../images/dark-flower.jpeg"

const HomeBanner = props => {
	return (
		<div className="p-relative">
			<div className="heading-banner">
				<h1 className="mb-4 text-capitalize">
					Website that grow your business.
				</h1>
				<Link to="/" className="btn-overlap">
					Let's Talk
				</Link>
			</div>
			<div
				className="bg-banner"
				style={{
					background: `url(${dark})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					height: "480px",
					width: "100%",
				}}
			/>
			<div id="services" className="text-center">
				<div className="container p-relative">
					<div className="blog-wrap py-4">
						<div className="row">
							<div className="col-md-4 col-sm-4 col-4">
								<Link to="/">
									<div className="round">
										<img
											src={services}
											alt="Services"
											className="img-fluid p-relative"
											style={{ maxWidth: "100px" }}
										/>
									</div>
									<h3 className="text-uppercase text-dark mb-0">Services</h3>
								</Link>
							</div>
							<div className="col-md-4 col-sm-4 col-4">
								<Link to="/">
									<div className="round">
										<img
											src={income}
											alt="Income"
											className="img-fluid p-relative"
											style={{ maxWidth: "100px" }}
										/>
									</div>
									<h3 className="text-uppercase text-dark mb-0">Pricing</h3>
								</Link>
							</div>
							<div className="col-md-4 col-sm-4 col-4">
								<Link to="/">
									<div className="round">
										<img
											src={team}
											alt="Our Team"
											className="img-fluid p-relative"
											style={{ maxWidth: "100px" }}
										/>
									</div>
									<h3 className="text-uppercase text-dark mb-0">Our Team</h3>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeBanner
