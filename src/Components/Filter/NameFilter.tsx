interface Props<T> {
    names: T
}

function NameFilter(props: Props<any>) {
    return (
        <div>
            {Object.values(props.names).map(name => (
                <label key={name as string} className="flex items-center">
                    <input
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600"
                    // onChange={onChange}
                    />
                    <span className="ml-2 text-gray-700">{name as string}</span>
                </label>
            )
            )}
        </div>
    )
}

export default NameFilter;