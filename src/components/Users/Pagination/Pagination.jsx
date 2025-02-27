import React from 'react';
import style from '../../Users/users.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPagination = () => {
    const pagination = [];
    const maxPagesToShow = 3; // Количество страниц, отображаемых вокруг текущей
    const ellipsis = '...'; // Многоточие для замены неактивных страниц
  
    // Всегда добавляем первую страницу
    pagination.push(1);
  
    // Добавляем многоточие, если текущая страница далеко от начала
    if (currentPage > maxPagesToShow + 1) {
      pagination.push(ellipsis);
    }
  
    // Добавляем страницы вокруг текущей
    const startPage = Math.max(2, currentPage - maxPagesToShow);
    const endPage = Math.min(totalPages - 1, currentPage + maxPagesToShow);
  
    for (let i = startPage; i <= endPage; i++) {
      pagination.push(i);
    }
  
    // Добавляем многоточие, если текущая страница далеко от конца
    if (currentPage < totalPages - maxPagesToShow) {
      pagination.push(ellipsis);
    }
  
    // Всегда добавляем последнюю страницу, если она больше 1
    if (totalPages > 1) {
      pagination.push(totalPages);
    }
  
    return pagination;
  };

  return (
    <div className={style.pagination}>
      <button className={style.paginButton} onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        &laquo;
      </button>
      {renderPagination().map((page, index) => (
        <button 
          key={index} 
          onClick={() => typeof page === 'number' && onPageChange(page)} 
          className={currentPage === page ? style.activePage : style.disabledPage }
          disabled={typeof page !== 'number'}
        >
          {page}
        </button>
      ))}
      <button className={style.paginButton} onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;