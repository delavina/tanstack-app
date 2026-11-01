import { Show, UserButton } from "@clerk/tanstack-react-start";
import { Link } from "@tanstack/react-router";
import { LogIn } from "lucide-react";
import dogonLogo from "#/assets/dogon-red.svg";
// import { usePostHog } from "posthog-js/react";

const Navbar = () => {
	// const posthog = usePostHog();

	return (
		<nav className="navbar">
			<div className="brand">
				<Link to="/" className="flex items-center gap-2 md:gap-3">
					<img src={dogonLogo} alt="Dogon Logo" className="h-7 w-auto md:h-8" />
					<span>digital assets</span>
				</Link>
			</div>

			<div className="actions">
				<Show when="signed-in">
					<UserButton />
				</Show>

				<Show when="signed-out">
					<Link
						to="/sign-in/$"
						className="btn-primary"
						//onClick={() => posthog.capture("sign_in_clicked")}
					>
						<LogIn size={16} />
						Sign in
					</Link>
				</Show>
			</div>
		</nav>
	);
};

export default Navbar;
