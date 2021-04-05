import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import clsx from "clsx";
export const SiderbarItem = ({
    icon = <i className="fa fa-home"></i>,
    title,
    href,
}: {
    icon?: any;
    title: string;
    href: string;
}) => {

    const { path } = useRouteMatch();

    return (
        <li className={clsx("nav-item", {active: path === href})}>
            <Link className="sidebar-link" to={href}>
                <span className="icon-holder">{icon}</span>
                <span className="title">{title}</span>
            </Link>
        </li>
    );
};
