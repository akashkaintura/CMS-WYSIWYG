import React from "react";
import Link from "next/link";

const Sidebar = () => {
    return (
        <aside style={{ width: "250px", padding: "20px", borderRight: "1px solid #ddd" }}>
            <nav>
                <ul>
                    <li><Link href="/posts">Posts</Link></li>
                    <li><Link href="/pages">Pages</Link></li>
                    <li><Link href="/plugins">Plugins</Link></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
