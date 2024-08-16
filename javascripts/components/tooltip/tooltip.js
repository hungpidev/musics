let tooltipElement;
let hoverTimeout;

export function createTooltip() {
  // Constants
  const OFFSET = 10; // Offset for positioning the tooltip
  const MARGIN = 10; // Margin from the edge of the window
  const HOVER_DELAY = 50; // Delay in milliseconds (1 second)

  function handleMouseOver(event) {
    const targetElement = event.target;
    if (targetElement && typeof targetElement.closest === "function") {
      const tooltipTrigger = targetElement.closest("[data-tooltip]");
      if (tooltipTrigger) {
        hoverTimeout = setTimeout(() => {
          if (!tooltipElement) {
            tooltipElement = document.createElement("div");
            tooltipElement.className = "tooltip";
            document.body.appendChild(tooltipElement);
          }

          tooltipElement.removeEventListener(
            "transitionend",
            handleTransitionEnd
          );

          const tooltipText = tooltipTrigger.getAttribute("data-tooltip");
          tooltipElement.innerHTML = tooltipText;

          const triggerRect = tooltipTrigger.getBoundingClientRect();
          const tooltipRect = tooltipElement.getBoundingClientRect();

          // Default position (below the trigger)
          let tooltipLeft = triggerRect.left + OFFSET;
          let tooltipTop = triggerRect.bottom + OFFSET;

          // Check if tooltip would overflow the right edge of the window
          if (tooltipLeft + tooltipRect.width > window.innerWidth - MARGIN) {
            tooltipLeft = window.innerWidth - tooltipRect.width - MARGIN;
          }

          // Check if tooltip would overflow the bottom edge of the window
          if (tooltipTop + tooltipRect.height > window.innerHeight - MARGIN) {
            tooltipTop = triggerRect.top - tooltipRect.height - OFFSET; // Move tooltip above the trigger
          }

          // Check if tooltip would overflow the top edge of the window
          if (tooltipTop < MARGIN) {
            tooltipTop = triggerRect.bottom + OFFSET; // Move tooltip below the trigger if there's not enough space above
          }

          // Check if tooltip would overflow the left edge of the window
          if (tooltipLeft < MARGIN) {
            tooltipLeft = MARGIN;
          }

          // Final position adjustments if the tooltip is still out of bounds
          tooltipLeft = Math.max(
            MARGIN,
            Math.min(
              tooltipLeft,
              window.innerWidth - tooltipRect.width - MARGIN
            )
          );
          tooltipTop = Math.max(
            MARGIN,
            Math.min(
              tooltipTop,
              window.innerHeight - tooltipRect.height - MARGIN
            )
          );

          tooltipElement.style.position = "fixed";
          tooltipElement.style.left = `${tooltipLeft}px`;
          tooltipElement.style.top = `${tooltipTop}px`;
          tooltipElement.classList.add("show");
        }, HOVER_DELAY); // Set delay
      }
    }
  }

  function handleMouseOut(event) {
    clearTimeout(hoverTimeout); // Clear the timeout if the user moves the mouse away

    const relatedElement = event.relatedTarget;
    if (
      !relatedElement ||
      !(event.target && typeof event.target.closest === "function") ||
      !event.target.closest("[data-tooltip]") ||
      !(relatedElement && typeof relatedElement.closest === "function") ||
      !relatedElement.closest("[data-tooltip]")
    ) {
      if (tooltipElement) {
        tooltipElement.classList.remove("show");

        // Add transitionend event listener to remove tooltip after hiding
        tooltipElement.addEventListener("transitionend", handleTransitionEnd, {
          once: true,
        });
      }
    }
  }

  function handleTransitionEnd() {
    if (tooltipElement) {
      tooltipElement.remove();
      tooltipElement = null;
    }
  }

  document.addEventListener("mouseover", handleMouseOver, true);
  document.addEventListener("mouseout", handleMouseOut, true);
}

export { tooltipElement };
