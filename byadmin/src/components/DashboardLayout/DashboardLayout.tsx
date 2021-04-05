import { Typography } from "@material-ui/core";
import { SiderbarItem } from "components/SidebarItem";
import { Logo } from "components/Logo";
import React from "react";

export const DashboardLayout: React.FC<{
    title: string;
    button?: React.ReactElement;
}> = ({ children, title, button }) => {
    return (
        <>
            <aside className="sidebar">
                <div className="sidebar-inner">
                    <div className="sidebar-header">
                        <Logo />
                    </div>
                    <ul className="sidebar-menu mt-5">
                        <SiderbarItem href="/dashboard" title="Dashboard" />
                        <SiderbarItem
                            icon={<i className="fa fa-clock" />}
                            href="/protocols"
                            title="Protocols"
                        />
                        <SiderbarItem
                            icon={<i className="fa fa-wallet" />}
                            href="/categories/"
                            title="Categories"
                        />

                        <SiderbarItem
                            icon={<i className="fa fa-wallet" />}
                            href="/strategies"
                            title="Strategy"
                        />
                        <SiderbarItem
                            icon={<i className="fa fa-user" />}
                            href="/users"
                            title="Users"
                        />
                    </ul>
                </div>
            </aside>
            <div className="page-container">
                <header className="header">
                    <div className="header-container"></div>
                </header>
                <main className="page-content">
                    <div className="px-3 pt-2 d-flex justify-content-between">
                        <Typography variant="h4">{title}</Typography>
                        {button && button}
                    </div>
                    {children}
                </main>
            </div>
        </>
    );
};
