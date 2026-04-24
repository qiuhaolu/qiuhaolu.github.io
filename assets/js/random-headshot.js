---
---

(function () {
  const headshots = [
    {% assign headshots = site.static_files | where_exp: "file", "file.path contains '/headshots/'" | sort: "path" %}
    {% for file in headshots %}
      "{{ file.path | relative_url }}"{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];

  const target = document.querySelector("[data-random-headshot]");

  if (!target || headshots.length === 0) {
    return;
  }

  const lastHeadshot = window.localStorage.getItem("lastHeadshot");
  let candidates = headshots;

  if (headshots.length > 1) {
    candidates = headshots.filter((headshot) => headshot !== lastHeadshot);
  }

  const selected = candidates[Math.floor(Math.random() * candidates.length)];
  target.src = selected;
  window.localStorage.setItem("lastHeadshot", selected);
})();
