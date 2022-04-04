import React from "react"
import Button from "./Button"

export default function Footer({ current_page, total_count, total_pages, handlePageChange }) {
  let pagination = []
  if (total_pages <= 7) {
    for (let i = 1; i <= total_pages; i++) {
      pagination.push({
        label: i,
        currentPage: current_page,
        handlePageChange: handlePageChange,
      })
    }
  } else if (current_page <= 2) {
    pagination = [
      {
        label: 1,
        currentPage: current_page,
        handlePageChange: handlePageChange,
      },
      {
        label: 2,
        currentPage: current_page,
        handlePageChange: handlePageChange,
      },
      {
        label: 3,
        currentPage: current_page,
        handlePageChange: handlePageChange,
      },
      {
        label: "...",
        style: "border-none pointer-events-none"
      },
      {
        label: total_pages - 2,
        currentPage: current_page,
        handlePageChange: handlePageChange,
      },
      {
        label: total_pages - 1,
        currentPage: current_page,
        handlePageChange: handlePageChange,
      },
      {
        label: total_pages,
        currentPage: current_page,
        handlePageChange: handlePageChange,
      },
    ]
  } else if (current_page < 5) {
    pagination = [
      {
        label: 1,
        currentPage: current_page,
        handlePageChange: handlePageChange,
      },
      {
        label: "...",
        style: "border-none pointer-events-none"
      },
      {
        label: 3,
        currentPage: current_page,
        handlePageChange: handlePageChange,
      },
      {
        label: 4,
        currentPage: current_page,
        handlePageChange: handlePageChange,
      },
      {
        label: 5,
        currentPage: current_page,
        handlePageChange: handlePageChange,
      },
      {
        label: 6,
        currentPage: current_page,
        handlePageChange: handlePageChange,
      },
      {
        label: 7,
        currentPage: current_page,
        handlePageChange: handlePageChange,
      },
      {
        label: "...",
        style: "border-none pointer-events-none"
      },
      {
        label: total_pages,
        currentPage: current_page,
        handlePageChange: handlePageChange,
      },
    ]
  } else if (current_page < total_pages - 5) {
    pagination = [
      {
        label: 1,
        currentPage: current_page,
        handlePageChange: handlePageChange,
      },
      {
        label: "...",
        style: "border-none pointer-events-none"
      },
      {
        label: current_page - 2,
        currentPage: current_page,
        handlePageChange: handlePageChange,
      },
      {
        label: current_page - 1,
        currentPage: current_page,
        handlePageChange: handlePageChange,
      },
      {
        label: current_page,
        currentPage: current_page,
        handlePageChange: handlePageChange,
      },
      {
        label: current_page + 1,
        currentPage: current_page,
        handlePageChange: handlePageChange,
      },
      {
        label: current_page + 2,
        currentPage: current_page,
        handlePageChange: handlePageChange,
      },
      {
        label: "...",
        style: "border-none pointer-events-none"
      },
      {
        label: total_pages,
        currentPage: current_page,
        handlePageChange: handlePageChange,
      },
    ]
  } else if (current_page >= total_pages - 5) {
    pagination = [
      {
        label: 1,
        currentPage: current_page,
        handlePageChange: handlePageChange,
      },
      {
        label: "...",
        style: "border-none pointer-events-none"
      },
      {
        label: total_pages - 6,
        currentPage: current_page,
        handlePageChange: handlePageChange,
      },
      {
        label: total_pages - 5,
        currentPage: current_page,
        handlePageChange: handlePageChange,
      },
      {
        label: total_pages - 4,
        currentPage: current_page,
        handlePageChange: handlePageChange,
      },
      {
        label: total_pages - 3,
        currentPage: current_page,
        handlePageChange: handlePageChange,
      },
      {
        label: total_pages - 2,
        currentPage: current_page,
        handlePageChange: handlePageChange,
      },
      {
        label: total_pages - 1,
        currentPage: current_page,
        handlePageChange: handlePageChange,
      },
      {
        label: total_pages,
        currentPage: current_page,
        handlePageChange: handlePageChange,
      },
    ]
  }

  return (
    <footer className="absolute bottom-0 flex justify-between w-full px-8 py-4 bg-white border-t border-slate-300">
      <Button
        type="Prev"
        label="Previous"
        style={current_page === 1 ? "flex items-center mx-0 text-slate-500 bg-slate-200 shadow-theme-sm pointer-events-none" : "flex items-center mx-0 shadow-theme-sm"}
        handlePageChange={handlePageChange}
      />
      <div>
        {pagination.map((button, index) => <Button key={index} {...button} />)}
      </div>
      <Button
        type="Next"
        label="Next"
        style={current_page === total_pages ? "flex items-center mx-0 text-slate-500 bg-slate-200 shadow-theme-sm pointer-events-none" : "flex items-center mx-0 shadow-theme-sm"}
        handlePageChange={handlePageChange}
      />
    </footer>
  )
}
