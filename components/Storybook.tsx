
import React, { useState, useCallback } from 'react';
import { BOOK_PAGES } from '../constants';

const Storybook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [pageToAnimate, setPageToAnimate] = useState<number | null>(null);
  const totalPages = BOOK_PAGES.length;

  const goNextPage = useCallback(() => {
    if (isFlipping || currentPage >= totalPages) return;

    setIsFlipping(true);
    setPageToAnimate(currentPage);
    setCurrentPage((current) => current + 1);
    
    setTimeout(() => {
      setIsFlipping(false);
      setPageToAnimate(null);
    }, 900); // Sync with CSS transition duration
  }, [isFlipping, currentPage, totalPages]);

  const goPrevPage = useCallback(() => {
    if (isFlipping || currentPage <= 0) return;
    
    setIsFlipping(true);
    setPageToAnimate(currentPage - 1);
    setCurrentPage((current) => current - 1);

    setTimeout(() => {
      setIsFlipping(false);
      setPageToAnimate(null);
    }, 900); // Sync with CSS transition duration
  }, [isFlipping, currentPage]);

  const handlePageClick = (pageNumber: number) => {
    if (isFlipping) return;
    if (pageNumber === currentPage) {
      goNextPage();
    } else if (pageNumber === currentPage - 1) {
      goPrevPage();
    }
  };
  
  return (
    <section id="my-book" className="py-24 bg-earth relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10 reveal-element">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-charcoal">A Creative Exploration</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
            This interactive storybook was created in collaboration with AI, weaving together my passions for narrative and art. Click the pages to read.
          </p>
        </div>
      </div>
      <div className="book-container mt-16 flex justify-center items-center relative reveal-element mx-auto px-4 md:px-6">
        <button id="prev-btn" onClick={goPrevPage} className="book-nav-btn left" aria-label="Previous Page">&#9664;</button>
        <div className="book" id="book">
          {BOOK_PAGES.map((page, index) => {
            const isFlipped = index < currentPage;
            let zIndex;

            if (pageToAnimate === index) {
              // The page currently in motion gets the highest z-index to ensure it animates over other pages.
              zIndex = totalPages + 1;
            } else if (isFlipped) {
              // Flipped pages are at the bottom of the stack, in order.
              zIndex = index;
            } else {
              // Unflipped pages are stacked naturally from top to bottom.
              zIndex = totalPages - index;
            }
            
            return (
              <div
                key={page.id}
                id={page.id}
                className={`page ${page.isHardcover ? 'hardcover' : ''} ${isFlipped ? 'flipped' : ''}`}
                style={{ zIndex }}
                onClick={() => handlePageClick(index)}
                role="button"
                aria-label={`Turn to page ${index + 1}`}
              >
                <div className="page-front">
                  <img src={page.front} alt={`Storybook page ${index * 2 + 1}`} />
                </div>
                <div className="page-back">
                  <img src={page.back} alt={`Storybook page ${index * 2 + 2}`} />
                </div>
              </div>
            );
          })}
        </div>
        <button id="next-btn" onClick={goNextPage} className="book-nav-btn right" aria-label="Next Page">&#9654;</button>
      </div>
    </section>
  );
};

export default Storybook;
