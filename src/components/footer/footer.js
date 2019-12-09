import React from "react"
import { Link } from "gatsby"

const footer = props => {
	return (
		<div>
			<div class="footer bg-dark text-white">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-md-5 mb-3 mb-md-0">
							<h6 class="text-uppercase text-white-50">About</h6>
							<p class="small">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</p>
						</div>
						<div class="col-md-2 mb-3 mb-md-0">
							<h6 class="text-uppercase text-white-50">Company</h6>
							<ul class="list-unstyled small">
								<li>
									<a href="index.html">Home</a>
								</li>
								<li>
									<a href="about-us.html">About Us</a>
								</li>
								<li>
									<a href="blog.html">Blog</a>
								</li>
								<li />
							</ul>
						</div>
						<div class="col-md-2 mb-3 mb-md-0">
							<h6 class="text-uppercase text-white-50">Services</h6>
							<ul class="list-unstyled small">
								<li>
									<a href="#">Web Design</a>
								</li>
								<li>
									<a href="#">Content Creation</a>
								</li>
								<li>
									<a href="#">Development</a>
								</li>
							</ul>
						</div>
						<div class="col-md-2 text-center mb-3 mb-md-0">
							<div class="social-icons">
								<a href="#">
									<i class="fa fa-facebook" />
								</a>
								<a href="#">
									<i class="fa fa-twitter" />
								</a>
								<a href="#">
									<i class="fa fa-instagram" />
								</a>
								<a href="#">
									<i class="fa fa-linkedin" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="copyright">
				<div class="container">
					<span>
						© 2019 All rights reserved. Designed and powered by
						<a href="https://webriq.com/" target="_blank">
							WebriQ
						</a>
						.
					</span>
				</div>
			</div>
		</div>
	)
}

export default footer
