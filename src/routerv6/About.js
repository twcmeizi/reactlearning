import React, { Component } from 'react'
import { Outlet, Link, NavLink, useSearchParams, useLocation } from 'react-router-dom'
import { getInvoices } from './data'

function QueryNavLink({ to, ...props }) {

    let location = useLocation();
    console.log(to, props, location);
    return <NavLink to={to + location.search} {...props} />;
}

export default function About() {
    let invoices = getInvoices();
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(searchParams.get('filter'))
    const changeValue = e => {
        let filter2 = e.target.value;
        if (filter2) {
            setSearchParams({ filter: filter2 })
        } else {
            setSearchParams({})
        }
    }
    return (
        <div style={{ display: "flex" }}>
            <nav
                style={{
                    borderRight: "solid 1px",
                    padding: "1rem",
                }}
            >
                <input type="text" value={searchParams.get('filter') || ""} onChange={changeValue} />
                {
                    invoices
                        .filter((invoice) => {
                            let filter = searchParams.get("filter");
                            if (!filter) return true;
                            let name = invoice.name.toLowerCase();
                            return name.startsWith(filter.toLowerCase());
                        })
                        .map((invoice) => {
                            return <><QueryNavLink style={({ isActive }) => {
                                return {
                                    color: isActive ? 'red' : ''
                                }
                            }}
                                to={`/about/${invoice.number}`} key={invoice.number}>{invoice.name}</QueryNavLink><br /></>
                        })
                }
                {/* {
                    invoices.map((invoice) => {
                        return <><Link to={`/about/${invoice.number}`} key={invoice.number}>{invoice.name}</Link><br /></>
                    })
                } */}
            </nav>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

