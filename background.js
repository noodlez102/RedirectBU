// Sites to redirect 
const redirectSites = [
  "https://www.bu.edu/mybu/",
  "https://student.bu.edu/MyBU/s/" 
];

// Redirect target
const redirectTo = "https://www.bu.edu/link/bin/uiscgi_studentlink.pl/1703288475?ModuleName=menu.pl&NewMenu=Academics";

// Add listener
browser.webRequest.onBeforeRequest.addListener(
  redirect, 
  {urls: redirectSites},
  ["blocking"]
);

function redirect(details) {
  return {redirectUrl: redirectTo};
}