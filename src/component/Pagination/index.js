import React, { useState } from 'react';
import './pagination.css'
function Pagination({ currentPage, totalPages, onPageChange }) {
    const [inputPage, setInputPage] = useState(currentPage);

    const handleInputChange = (e) => {
        setInputPage(parseInt(e.target.value));
    };

    const handleInputBlur = () => {
        if (inputPage < 1) {
            setInputPage(1);
        } else if (inputPage > totalPages) {
            setInputPage(totalPages);
        }
    };

    const handlePreviousPage = () => {
        onPageChange(currentPage - 1);
    };

    const handleNextPage = () => {
        onPageChange(currentPage + 1);
    };

    const handlePageSubmit = (e) => {
        e.preventDefault();
        if (inputPage >= 1 && inputPage <= totalPages) {
            onPageChange(inputPage);
        }
    };

    return (
        <div className='pagination'>
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                Previous
            </button>
            <form onSubmit={handlePageSubmit}>
                <input
                    type="number"
                    disabled
                    min={1}
                    max={totalPages}
                    value={inputPage}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                />
                <span> of {totalPages}</span>

            </form>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    );
}

export default Pagination;
