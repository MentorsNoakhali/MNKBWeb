/* ============================================================
   Free IELTS Resources — Password-gated download page
   ============================================================ */

(function () {
  "use strict";

  var PASSWORD = "MENTORS2026";
  var FORM_URL = "https://forms.gle/wdYQqFao3pfwRiWQA";

  var FILES = [
    {
      name: "Collins Speaking for IELTS",
      path: "Media/FREE IELTS/Collins-Speaking-for-IELTS.pdf",
      size: "PDF",
    },
    {
      name: "IELTS Speaking Master Plan",
      path: "Media/FREE IELTS/ielts_speaking_master_plan.pdf",
      size: "PDF",
    },
    {
      name: "IELTS Speaking Questions — Comprehensive Guide",
      path: "Media/FREE%20IELTS/IELTS-Speaking-Questions-A-Comprehensive-Guide.pdf",
      size: "PDF",
    },
    {
      name: "SPEAKING Book Preview",
      path: "Media/FREE%20IELTS/SPEAKING%20book%20preview.pdf",
      size: "PDF",
    },
  ];

  var $ = function (id) {
    return document.getElementById(id);
  };

  var app = function () {
    return $("app");
  };

  /* ── SVG icons ─────────────────────────────────────── */
  var svgPDF = function () {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>';
  };

  var svgDownload = function () {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>';
  };

  /* ── Render: Password Gate ─────────────────────────── */
  var renderGate = function () {
    app().innerHTML =
      '<div class="ielts-gate">' +
      '  <div class="ielts-gate-brand">' +
      '    <img src="Media/Mentors-Noakhali-Branch-Logo.png" alt="Mentors\' Noakhali Branch" />' +
      "  </div>" +
      '  <div class="ielts-gate-card">' +
      "    <h1>Free IELTS <em>Resources</em></h1>" +
      '    <p class="ielts-gate-sub">Enter the password from the form to access your free materials.</p>' +
      '    <input type="password" id="ielts-password" class="ielts-gate-input" placeholder="Enter password" autocomplete="off" />' +
      '    <div id="ielts-password-error" class="ielts-gate-error"></div>' +
      '    <button class="btn-start" id="ielts-password-submit">Unlock Downloads</button>' +
      "  </div>" +
      "</div>";

    $("ielts-password-submit").onclick = function () {
      var input = $("ielts-password");
      var error = $("ielts-password-error");
      if (input.value === PASSWORD) {
        renderDownloads();
      } else {
        error.textContent = "Incorrect password. Please try again.";
        error.style.display = "block";
        input.value = "";
        input.focus();
      }
    };

    $("ielts-password").addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        $("ielts-password-submit").click();
      }
    });

    $("ielts-password").focus();
  };

  /* ── Render: Download Panel ────────────────────────── */
  var renderDownloads = function () {
    var cards = FILES.map(function (f) {
      return (
        '<div class="ielts-file-card">' +
        '  <div class="ielts-file-icon">' + svgPDF() + "</div>" +
        '  <div class="ielts-file-info">' +
        '    <div class="ielts-file-name">' + f.name + "</div>" +
        '    <div class="ielts-file-meta">' + f.size + "</div>" +
        "  </div>" +
        '  <a class="btn-download" href="' + f.path + '" download>' +
        svgDownload() + " Download" +
        "  </a>" +
        "</div>"
      );
    }).join("");

    app().innerHTML =
      '<div class="ielts-downloads">' +
      '  <div class="ielts-downloads-header">' +
      "    <h1>Free IELTS <em>Resources</em></h1>" +
      "    <p>Your materials are ready. Click download to save each file.</p>" +
      "  </div>" +
      '  <div class="ielts-file-grid">' +
      cards +
      "  </div>" +
      "</div>";
  };

  /* ── Init ──────────────────────────────────────────── */
  document.addEventListener("DOMContentLoaded", function () {
    renderGate();
  });
})();
