// linkTracker.js

// Function to check if a link has been visited or not
export function isLinkVisited(link) {
  const visitedLinks = JSON.parse(localStorage.getItem('visitedLinks')) || [];
  return visitedLinks.includes(link);
}

// Function to mark a link as visited
export function markLinkAsVisited(link) {
  const visitedLinks = JSON.parse(localStorage.getItem('visitedLinks')) || [];
  if (!visitedLinks.includes(link)) {
    visitedLinks.push(link);
    localStorage.setItem('visitedLinks', JSON.stringify(visitedLinks));
  }
}
