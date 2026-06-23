document.addEventListener('DOMContentLoaded', function () {
  console.log('js/main.js loaded');

  // Example: enable Bootstrap tooltips if present
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (el) { return new bootstrap.Tooltip(el); });

  // TODO: add custom initialization (carousel behavior, form handlers, etc.)
});
