// Font Snatcher Content Script
// Minimal setup - main functionality is injected via popup.js executeScript

(function() {
    'use strict';

    // Clean up any existing highlights on page load/refresh
    function cleanup() {
        document.querySelectorAll(
            '.wff-highlight, .wff-hover-highlight, .wff-hover-tooltip, .wff-copy-toast'
        ).forEach(el => el.remove());
        document.querySelectorAll('.wff-anchored').forEach(el => {
            el.style.anchorName = '';
            el.classList.remove('wff-anchored');
        });

        // Reset inspector state if active
        if (window.wffInspectorActive) {
            window.wffInspectorActive = false;
            document.body.style.cursor = '';
        }
    }

    // Run cleanup on load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', cleanup);
    } else {
        cleanup();
    }
})();
