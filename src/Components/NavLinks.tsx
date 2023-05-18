import Link from "next/link";
import React from "react";

interface Link {
    name: string;
    link: string;
}

interface Props {
    links: Link[];
}

function NavLinks(props: Props) {
    return (
        <div className="flex gap-4">
            {props.links.map((link, index) => <React.Fragment key={link.name}>
                <Link href={link.link} className="hover:underline">{link.name}</Link>
                {index < props.links.length - 1 && <span>/</span>}
            </React.Fragment>)}
        </div>
    )
}

export default NavLinks;