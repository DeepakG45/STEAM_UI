function opentab(evt, tabName) {
    var i, tabContent, tabLinks;

    // Hide all tab content
    tabContent = document.getElementsByClassName("TAB_CONTENT");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Remove "active" class from all tab links
    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Show the current tab and add an "active" class to the clicked tab button
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
