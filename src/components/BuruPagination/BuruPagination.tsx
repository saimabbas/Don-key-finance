import React from "react";
import { Pagination } from "react-bootstrap";

export const BuruPagination = () => {
    return (
        <div className="paginationTable">
            <Pagination>
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{120}</Pagination.Item>

                <Pagination.Next />
            </Pagination>
        </div>
    );
};