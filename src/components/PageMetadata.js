export function DocMeta({ created, updated }) {
    if (!created && !updated) return null;

    return (
        <div className="flex justify-between text-sm text-gray-400 mb-8 mt-10">
            {created ? (
                <p><strong className="font-medium">Created:</strong> {created}</p>
            ) : (
                // Keeps last updated on right, even without created date
                <div />
            )}

            {updated && (
                <p><strong className="font-medium">Last Updated:</strong> {updated}</p>
            )}
        </div>
    );
}