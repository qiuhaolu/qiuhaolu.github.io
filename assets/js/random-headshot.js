(function () {
  const defaultHeadshot = "/headshots/headshot_variant_3.png";
  const headshots = [
    "/headshots/headshot_variant_1.png",
    "/headshots/headshot_variant_2.png",
    defaultHeadshot,
    "/headshots/headshot_variant_5.png",
    "/headshots/headshot_variant_6.png",
    "/headshots/headshot_variant_7.png"
  ];

  const target = document.querySelector("[data-random-headshot]");

  if (!target || headshots.length === 0) {
    return;
  }

  const lastHeadshot = window.localStorage.getItem("lastHeadshot");
  const hasShownDefault = window.localStorage.getItem("hasShownDefaultHeadshot");

  if (!hasShownDefault && headshots.includes(defaultHeadshot)) {
    target.src = defaultHeadshot;
    window.localStorage.setItem("lastHeadshot", defaultHeadshot);
    window.localStorage.setItem("hasShownDefaultHeadshot", "true");
    return;
  }

  let candidates = headshots;

  if (headshots.length > 1) {
    candidates = headshots.filter((headshot) => headshot !== lastHeadshot);
  }

  const selected = candidates[Math.floor(Math.random() * candidates.length)];
  target.src = selected;
  window.localStorage.setItem("lastHeadshot", selected);
})();
