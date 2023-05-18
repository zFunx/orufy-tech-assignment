import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

function BoxHOC({ children }: Props) {
    return (
        <div className="p-4 border-b border-t">{children}</div>
    );
}

export default BoxHOC;
