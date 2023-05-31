import React from "react";

const Pagination = ({ totalNumberProducts, setCurrentPage, currentPage, coinsPerPage }) => {

    const pageNumbers = []

    for (let i = 1; i <= totalNumberProducts / coinsPerPage; i++) {
        pageNumbers.push(i)
    }

    const onPreviousPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const onNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const onSpecificPage = (n) => {
        setCurrentPage(n)
    }

    const isLastPage = currentPage === pageNumbers[pageNumbers.length - 1];
    const isFirstPage = currentPage === 1;


    return (
        <nav className="flex items-center justify-center">
            {isFirstPage ? (
                <span className="px-4 py-2 text-gray-500 border border-gray-500 rounded-md cursor-not-allowed">
                    Previous
                </span>
            ) : (
                <a
                    href="#"
                    className="px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white cursor-pointer no-underline"
                    onClick={onPreviousPage}
                >
                    Previous
                </a>
            )}
            <ul className="flex items-center justify-center space-x-1">
                {pageNumbers.map((noPage) => (
                    <li key={noPage}>
                        <a
                            href="#"
                            className={`px-3 text-gray-500 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white no-underline ${noPage === currentPage ? "bg-blue-500 text-white no-underline" : ""
                                } cursor-pointer`}
                            aria-label={`Goto page ${noPage}`}
                            onClick={() => onSpecificPage(noPage)}
                        >
                            {noPage}
                        </a>
                    </li>
                ))}
            </ul>
            {isLastPage ? (
                <span className="px-4 py-2 text-gray-500 border border-gray-500 rounded-md cursor-not-allowed">
                    Next page
                </span>
            ) : (
                <a
                    href="#"
                    className="px-4 py-2 ml-8 text-gray-500 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white cursor-pointer no-underline"
                    onClick={onNextPage}
                >
                    Next page
                </a>
            )}
        </nav>
    );
};

export default Pagination;
