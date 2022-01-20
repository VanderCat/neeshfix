import "./scss/main.scss"

import MarkdownIt from "markdown-it";
import MarkdownItTocDoneRight from "markdown-it-toc-done-right";
import MarkdownItAnchor from "markdown-it-anchor";
var markdown = new MarkdownIt({
    html:true,
    linkify:true,
  });

markdown.use(MarkdownItAnchor, {permalink: MarkdownItAnchor.permalink.ariaHidden({placement:"before", symbol:'<i class="material-icons">link</i>'})})
markdown.use(MarkdownItTocDoneRight, {level: [1,2,3]})

function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
    }
    return result;
  }
const md = markdown.render(loadFile("./index.md"))
document.getElementById("content").innerHTML = md

window.onscroll = function() {scrollFunction()};
let btn = document.getElementById("top")
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.removeAttribute("hide")
  } else {
    btn.setAttribute("hide", true);
  }
}

function gototop() {
    location.href = "#content"
}

btn.onclick = gototop;