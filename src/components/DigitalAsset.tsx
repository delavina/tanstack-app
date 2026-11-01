import { Link } from "@tanstack/react-router";
import {
	ArrowBigUp,
	ArrowUpRight,
	Bookmark,
	MessageSquare,
} from "lucide-react";
// import { usePostHog } from "posthog-js/react";
import { useState } from "react";

type DigitalAssetCardProps = DigitalAsset;

const DigitalAssetCard = ({
	id,
	title,
	slug,
	description,
	category,
	tags,
	type,
	price,
	previewUrl,
	secureDownloadUrl,
	createdAt,
	authorClerkId,
	authorEmail,
}: DigitalAssetCardProps) => {
	const [_copied, setCopied] = useState(false);
	// const posthog = usePostHog();

	const commandText = slug ? `asset get ${slug}` : `asset:${id}`;
	const authorName = authorEmail
		? authorEmail.split("@")[0]
		: authorClerkId
			? `User_${authorClerkId.slice(-4)}`
			: "Creator";

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(commandText || secureDownloadUrl);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
			/* posthog?.capture?.("install_command_copied", {
				asset_title: title,
				asset_category: category,
				price: price,
			}); */
		} catch {
			setCopied(false);
		}
	};

	void handleCopy; // TODO: wire up copy button when command UI is re-enabled

	return (
		<article className="asset-card">
			<Link
				to="/"
				tabIndex={-1}
				aria-label={`Open ${title}`}
				className="overlay"
				// TODO: replace with /assets/$slug once that route exists
			/>

			<div className="chrome">
				<div className="chrome-bar">
					<p className="category">{category}</p>
					<div className="host">{type.toUpperCase()}</div>
				</div>
			</div>

			<div className="body">
				{/* Asset Preview */}
				{previewUrl && (
					<div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border-subtle bg-base">
						<img
							src={previewUrl || "../placeholder.svg"}
							alt={`${title} preview`}
							className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
						/>
					</div>
				)}

				<div className="summary">
					<Link to="/" className="title-link">
						{/* TODO: replace with /assets/$slug once that route exists */}
						<h3>{title}</h3>
					</Link>

					<p>{description}</p>
				</div>

				<div className="meta">
					<div className="author">
						<div className="avatar flex items-center justify-center bg-border-subtle/50 text-xs font-bold text-text-muted">
							{authorName.slice(0, 2).toUpperCase()}
						</div>
						<div className="author-copy">
							<p>{authorName}</p>
							<p>
								{createdAt
									? new Date(createdAt).toLocaleDateString()
									: "Unknown date"}
							</p>
						</div>
					</div>
					<div className="price">
						<span className="overflow-hidden font-semibold text-accent-primary whitespace-nowrap">
							{price.toFixed(2)} €
						</span>
					</div>
				</div>

				{/* Copy command — re-enable when command UI is needed
				<div className="command">
					<div className="command-copy">
						<span>{">_"}</span>
						<p>{commandText}</p>
					</div>
					<button
						type="button"
						className="copy"
						onClick={handleCopy}
						aria-label="Copy asset command"
					>
						{_copied ? <Check size={16} /> : <Copy size={16} />}
					</button>
				</div>
				*/}

				<div className="footer">
					<div className="stats">
						<button type="button" className="upvote" disabled>
							<ArrowBigUp size={16} fill="currentColor" />
							<span>{tags.length}</span>
						</button>
						<div className="comments">
							<MessageSquare size={14} />
							<span>{authorEmail ? 1 : 0}</span>
						</div>
					</div>

					<div className="actions">
						<Link
							to="/"
							className="open"
							title={`Open ${title}`}
							// TODO: replace with /assets/$slug once that route exists
							/* onClick={() =>
								posthog?.capture?.("asset_opened", {
									asset_title: title,
									asset_category: category,
								})
							} */
						>
							<span>Open</span>
							<ArrowUpRight size={14} />
						</Link>

						<button
							type="button"
							className="save"
							aria-label="Saved state"
							disabled
						>
							<Bookmark size={16} />
						</button>
					</div>
				</div>
			</div>
		</article>
	);
};

export default DigitalAssetCard;
