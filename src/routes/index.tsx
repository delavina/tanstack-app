import { createFileRoute, Link } from "@tanstack/react-router";
// import { createServerFn } from "@tanstack/react-start";
import { Terminal } from "lucide-react";
// import { usePostHog } from "posthog-js/react";
import DigitalAssetCard from "#/components/DigitalAsset";
// import { getAssets } from "#/dataconnect-generated";
// import { dataConnect } from "#/lib/firebase";
import { assets } from "#/lib/dummyAssets";

/* const getAssetsFn = createServerFn({ method: "GET" }).handler(async () => {
	try {
		const { data } = await getAssets(dataConnect, {
			searchTerm: "",
			limit: 10,
		});

		return data.assets;
	} catch (error) {
		console.error(error);
		return [];
	}
}); */

export const Route = createFileRoute("/")({
	component: App,
	// loader: () => getAssetsFn(),
});

function App() {
	// const posthog = usePostHog();

	// const assets = Route.useLoaderData();

	return (
		<div id="home">
			<section className="hero">
				<div className="copy">
					<h1>
						Register für <br />
						<span className="text-gradient">digitale Ressourcen</span>
					</h1>
					<p>
						Ein leistungsstarker Fundort für digitale Assets,Tools und
						Requisiten. <br />
						Entdecke, veröffentliche und nutze digitale Ressourcen für dein
						Filmprojekt. <br />
						Wir bieten dir einen strukturierten Arbeitsbereich für die
						Verwaltung und gemeinsame Nutzung von digitalen Assets.
					</p>
				</div>

				<div className="actions">
					<Link
						to="/"
						className="btn-primary"
						// TODO: replace with /assets once that route exists
						// onClick={() => posthog.capture("browse_registry_clicked")}
					>
						<Terminal size={18} />
						<span>Entdecken</span>
					</Link>
					<Link
						to="/"
						className="btn-secondary"
						// TODO: replace with /assets/new once that route exists
						// onClick={() => posthog.capture("publish_asset_clicked")}
					>
						Veröffentlichen
					</Link>
				</div>
			</section>

			<section className="latest">
				<div className="space-y-2">
					<h2>
						Recently Created <span className="text-gradient">Assets</span>
					</h2>
					<p>
						{" "}
						Latest assets loaded from database in descending creation order.
					</p>
				</div>

				<div>
					{assets.length > 0 ? (
						<div className="assets-grid">
							{assets.map((asset) => (
								<DigitalAssetCard key={asset.id} {...asset} />
							))}
						</div>
					) : (
						<p>No assets have been created yet.</p>
					)}
				</div>
			</section>
		</div>
	);
}
