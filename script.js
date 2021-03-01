function noStyle() {
    document.styleSheets[0].disabled = true;
    document.styleSheets[1].disabled = true;
    document.styleSheets[2].disabled = true;
    document.styleSheets[3].disabled = true;
    document.styleSheets[4].disabled = true;
}

// Function that'll change the stylesheets!
function style01() {
noStyle();
    document.styleSheets[0].disabled = false;
}
function style02() {
noStyle();
    document.styleSheets[1].disabled = false;
}
function style03() {
noStyle();
    document.styleSheets[2].disabled = false;
}
function style04() {
noStyle();
    document.styleSheets[3].disabled = false;
}
function style05() {
noStyle();
    document.styleSheets[4].disabled = false;
}

style01();
