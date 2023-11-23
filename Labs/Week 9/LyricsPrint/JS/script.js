function printLyrics() {
    let numBottles = 0;
    const lyricPt1 = " bottles of beer on the wall, ";
    const lyricPt2 = " bottles of beer";
    const lyricPt3 = "Take one down and pass it around, ";
    const lyricPt4 = " bottles of beer on the wall";
    const endLine = "Go to the store and buy some more, ";
    const contentHolder = document.getElementById("contentHolder");

    function printToDiv(text) {
        contentHolder.innerHTML += text;
    }

    numBottles = 99;

    for (let i = 0; i <= 99; i++) {
        if (i === 97) {
            printToDiv(numBottles + lyricPt1 + numBottles + lyricPt2 + "<br>");
            printToDiv(lyricPt3 + --numBottles + " bottle of beer on the wall" + "<br>");
            printToDiv("<br>");
        } else if (i === 98) {
            printToDiv(numBottles + " bottle of beer on the wall, " + numBottles + " bottle of beer" + "<br>");
            printToDiv(lyricPt3 + "no more bottles of beer on the wall" + "<br>");
            printToDiv("<br>");
        } else if (i === 99) {
            numBottles = i;
            printToDiv("No more" + lyricPt1 + "no more" + lyricPt2 + "<br>");
            printToDiv(endLine + numBottles + lyricPt4 + "<br>");
        } else {
            printToDiv(numBottles + lyricPt1 + numBottles + lyricPt2 + "<br>");
            printToDiv(lyricPt3 + --numBottles + lyricPt4 + "<br>");
            printToDiv("<br>");
        }
    }
}

printLyrics();