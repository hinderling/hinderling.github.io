function gridCellDimensions() {
  const element = document.createElement("div");
  element.style.position = "fixed";
  element.style.height = "var(--line-height)";
  element.style.width = "1ch";
  document.body.appendChild(element);
  const rect = element.getBoundingClientRect();
  document.body.removeChild(element);
  return { width: rect.width, height: rect.height };
}

// Add padding to each media to maintain grid.
function adjustMediaPadding() {
  const cell = gridCellDimensions();

  function setHeightFromRatio(media, ratio) {
      const rect = media.getBoundingClientRect();
      const realHeight = rect.width / ratio;
      const diff = cell.height - (realHeight % cell.height);
      media.style.setProperty("padding-bottom", `${diff}px`);
  }

  function setFallbackHeight(media) {
      const rect = media.getBoundingClientRect();
      const height = Math.round((rect.width / 2) / cell.height) * cell.height;
      media.style.setProperty("height", `${height}px`);
  }

  function onMediaLoaded(media) {
    var width, height;
    switch (media.tagName) {
      case "IMG":
        width = media.naturalWidth;
        height = media.naturalHeight;
        break;
      case "VIDEO":
        width = media.videoWidth;
        height = media.videoHeight;
        break;
    }
    if (width > 0 && height > 0) {
      setHeightFromRatio(media, width / height);
    } else {
      setFallbackHeight(media);
    }
  }

  const medias = document.querySelectorAll("img, video");
  for (const media of medias) {
    switch (media.tagName) {
      case "IMG":
        if (media.complete) {
          onMediaLoaded(media);
        } else {
          media.addEventListener("load", () => onMediaLoaded(media));
          media.addEventListener("error", function() {
              setFallbackHeight(media);
          });
        }
        break;
      case "VIDEO":
        switch (media.readyState) {
          case HTMLMediaElement.HAVE_CURRENT_DATA:
          case HTMLMediaElement.HAVE_FUTURE_DATA:
          case HTMLMediaElement.HAVE_ENOUGH_DATA:
            onMediaLoaded(media);
            break;
          default:
            media.addEventListener("loadeddata", () => onMediaLoaded(media));
            media.addEventListener("error", function() {
              setFallbackHeight(media);
            });
            break;
        }
        break;
    }
  }
}

adjustMediaPadding();
window.addEventListener("load", adjustMediaPadding);
window.addEventListener("resize", adjustMediaPadding);

function checkOffsets() {
  const ignoredTagNames = new Set([
    "THEAD",
    "TBODY",
    "TFOOT",
    "TR",
    "TD",
    "TH",
  ]);
  const cell = gridCellDimensions();
  const elements = document.querySelectorAll("body :not(.debug-grid, .debug-toggle)");
  for (const element of elements) {
    if (ignoredTagNames.has(element.tagName)) {
      continue;
    }
    const rect = element.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) {
      continue;
    }
    const top = rect.top + window.scrollY;
    const left = rect.left + window.scrollX;
    const offset = top % (cell.height / 2);
    if(offset > 0) {
      element.classList.add("off-grid");
      console.error("Incorrect vertical offset for", element, "with remainder", top % cell.height, "when expecting divisible by", cell.height / 2);
    } else {
      element.classList.remove("off-grid");
    }
  }
}

const debugToggle = document.querySelector(".debug-toggle");
if (debugToggle) {
  function onDebugToggle() {
    document.body.classList.toggle("debug", debugToggle.checked);
  }
  debugToggle.addEventListener("change", onDebugToggle);
  onDebugToggle();
}

function updateMediaSourceForMode(media, useDarkVariant) {
  const brightSrc = media.getAttribute("data-src-bright");
  const darkSrc = media.getAttribute("data-src-dark");
  if (!brightSrc || !darkSrc) {
    return;
  }

  const targetSrc = useDarkVariant ? darkSrc : brightSrc;
  if (media.getAttribute("src") === targetSrc) {
    return;
  }

  media.setAttribute("src", targetSrc);
  if (media.tagName === "VIDEO") {
    media.load();
  }
}

// Legacy dark mode toggle functionality for compatibility
const modeToggle = document.querySelector(".mode-toggle");
if (modeToggle) {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  function onModeToggle() {
    if (modeToggle.checked) {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    }
    // Update all images and videos with data-src-bright and data-src-dark
    document
      .querySelectorAll('img[data-src-bright][data-src-dark], video[data-src-bright][data-src-dark]')
      .forEach(media => {
        updateMediaSourceForMode(media, modeToggle.checked);
      });
  }

  modeToggle.addEventListener("change", onModeToggle);

  // Set initial mode
  if (prefersDarkScheme.matches) {
    modeToggle.checked = true;
  } else {
    modeToggle.checked = false;
  }
  onModeToggle();
}

document.addEventListener('DOMContentLoaded', function() {
  var modeToggle = document.querySelector('.mode-toggle');
  if (!modeToggle) return; // Exit if toggle not found

  function updateMediaSources() {
    document
      .querySelectorAll('img[data-src-bright][data-src-dark], video[data-src-bright][data-src-dark]')
      .forEach(function(media) {
        updateMediaSourceForMode(media, modeToggle.checked);
      });
  }

  modeToggle.addEventListener('change', updateMediaSources);
  updateMediaSources(); // Set initial state
});
