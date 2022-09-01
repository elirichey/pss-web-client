export default function Pagination(props) {
  const {
    currentPage,
    goNext,
    goPrevious,
    goToPage,
    goFirst,
    goLast,
    totalPages,
  } = props;

  const renderPreviousButtons = () => {
    return (
      <>
        {currentPage < 6 ? null : (
          <button onClick={() => goToPage(currentPage - 5)}>
            {currentPage - 5}
          </button>
        )}

        {currentPage < 5 ? null : (
          <button onClick={() => goToPage(currentPage - 4)}>
            {currentPage - 4}
          </button>
        )}

        {currentPage < 4 ? null : (
          <button onClick={() => goToPage(currentPage - 3)}>
            {currentPage - 3}
          </button>
        )}

        {currentPage < 3 ? null : (
          <button onClick={() => goToPage(currentPage - 2)}>
            {currentPage - 2}
          </button>
        )}

        {currentPage < 2 ? null : (
          <button onClick={() => goToPage(currentPage - 1)}>
            {currentPage - 1}
          </button>
        )}
      </>
    );
  };

  const renderNextButtons = () => {
    return (
      <>
        {currentPage < totalPages ? (
          <button onClick={() => goToPage(currentPage + 1)}>
            {currentPage + 1}
          </button>
        ) : null}

        {currentPage < totalPages - 2 ? (
          <button onClick={() => goToPage(currentPage + 2)}>
            {currentPage + 2}
          </button>
        ) : null}

        {currentPage < totalPages - 3 ? (
          <button onClick={() => goToPage(currentPage + 3)}>
            {currentPage + 3}
          </button>
        ) : null}

        {currentPage < totalPages - 4 ? (
          <button onClick={() => goToPage(currentPage + 4)}>
            {currentPage + 4}
          </button>
        ) : null}

        {currentPage < totalPages - 5 ? (
          <button onClick={() => goToPage(currentPage + 5)}>
            {currentPage + 5}
          </button>
        ) : null}
      </>
    );
  };

  return (
    <div id="products-pagination">
      {/* PREVIOUS */}
      {currentPage > 6 ? (
        <button onClick={goFirst} className="mr-30">
          First
        </button>
      ) : null}

      {currentPage > 1 && currentPage > 6 ? (
        <button onClick={goPrevious}>«</button>
      ) : null}

      {/* CURRENT */}
      {renderPreviousButtons()}
      <button disabled={true}>{currentPage}</button>
      {renderNextButtons()}

      {/* NEXT */}
      {currentPage < totalPages && currentPage < totalPages - 6 ? (
        <button onClick={goNext}>»</button>
      ) : null}
      {currentPage < totalPages && currentPage < totalPages - 6 ? (
        <button onClick={goLast} className="ml-30">
          Last
        </button>
      ) : null}
    </div>
  );
}
