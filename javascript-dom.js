console.log(document);

const divs = document.getElementsByTagName("div");
console.log(divs);

const inviteButton = document.getElementById("invite-button");
inviteButton.style = "font-size: 20px;";
inviteButton.style.fontFamily = "Courier New";


console.log(inviteButton);

const accountButton = document.getElementsByName("account-button");
console.log(accountButton[0]);

const signoutButton = document.getElementById("signout-button");
console.log(signoutButton);

let inviteButtonRemoved;
const topNavButtons = document.getElementById("top-nav-buttons");
for (const el of topNavButtons.children) {
    if (el.id === "invite-button") {
        topNavButtons.removeChild(el);
        inviteButtonRemoved = el;
    }
}

topNavButtons.appendChild(inviteButtonRemoved);
topNavButtons.insertBefore(inviteButtonRemoved, accountButton[0])