document.querySelectorAll(".content a[href]").forEach((link) => {
  if (link.dataset.expandedUrl === "true") {
    return;
  }

  const separator = document.createElement("span");
  separator.className = "link-separator";
  separator.textContent = ": ";

  const url = document.createElement("span");
  url.className = "link-url";
  url.textContent = link.href;

  link.append(separator, url);
  link.dataset.expandedUrl = "true";
});
