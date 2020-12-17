import React from "react";

function Navigation(props) {
	const {
		aboutSelected,
		setAboutSelected,
		portfolioSelected,
		setPortfolioSelected,
		contactSelected,
		setContactSelected,
		resumeSelected,
		setResumeSelected,
	} = props;

	return (
		<nav>
			<ul className="flex-row">
				<li className="mx-2">
					<span
						onClick={() => (
							setAboutSelected(true),
							setPortfolioSelected(false),
							setContactSelected(false),
							setResumeSelected(false)
						)}
					>
						About Me
					</span>
				</li>
				<li className="mx-2">
					<span
						onClick={() => (
							setAboutSelected(false),
							setPortfolioSelected(true),
							setContactSelected(false),
							setResumeSelected(false)
						)}
					>
						Portfolio
					</span>
				</li>
				<li className="mx-2">
					<span
						onClick={() => (
							setAboutSelected(false),
							setPortfolioSelected(false),
							setContactSelected(true),
							setResumeSelected(false)
						)}
					>
						Contact
					</span>
				</li>
				<li className="mx-2">
					<span
						onClick={() => (
							() => setAboutSelected(false),
							setPortfolioSelected(false),
							setContactSelected(false),
							setResumeSelected(true)
						)}
					>
						Resume
					</span>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
