var INVISIBLE_CSS_CLASS = "invisible";
var LOADING_CSS_CLASS = "pending";

function appendJSToDOM(url, location, onLoadCallback) {
    const scriptTag = document.createElement("script");
    scriptTag.src = url;
    location.appendChild(scriptTag);
    scriptTag.onload = onLoadCallback;
}

function getSectionGameContainer() {
    return document.getElementById("section-game-container");
}

function getGameCanvasContainer() {
    return document.getElementById("game-canvas-container");
}

function getSectionInfoContainer() {
    return document.getElementById("section-info-container");
}

function getPlayButton() {
    return document.getElementById("play-button");
}

function getCanvas() {
    return document.getElementById("canvas");
}

function downloadSources(pathToVisuJS) {
    appendJSToDOM(pathToVisuJS, document.body, () => {
        
        runGame();
    });
}

function runGame() {
    const gameCanvasContainer = getGameCanvasContainer();
    if (!getCanvas()) {
        const gameCanvas = document.createElement("canvas");
        gameCanvas.id = "canvas";
        gameCanvas.width = gameCanvasContainer.clientWidth;
        gameCanvas.height = gameCanvasContainer.clientHeight;
        gameCanvasContainer.appendChild(gameCanvas);
    }

    GameMaker_Init();


    document.getElementById("info-container-play-btn-description").textContent = "Loading assets"
    console.log("GAME LOADED");
}

function showGameContainer() {
    const gameContainer = getSectionGameContainer();
    gameContainer.classList.remove(INVISIBLE_CSS_CLASS);
    const infoContainer = getSectionInfoContainer();
    infoContainer.classList.add(INVISIBLE_CSS_CLASS);
}

function enableFullscreen() {
    window.scrollTo(0, 0);
    const gameCanvas = getCanvas();
    document.getElementById("game-canvas-container").width = 1280;
    document.getElementById("game-canvas-container").width = 720;
    if (gameCanvas.requestFullscreen) {
        gameCanvas.requestFullscreen();
    } else if (gameCanvas.mozRequestFullScreen) {
        /* Firefox */
        gameCanvas.mozRequestFullScreen();
    } else if (gameCanvas.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        gameCanvas.webkitRequestFullscreen();
    } else if (gameCanvas.msRequestFullscreen) {
        /* IE/Edge */
        gameCanvas.msRequestFullscreen();
    }
}

if (document.addEventListener) {
    document.addEventListener('fullscreenchange', onFullscreenExitHandler, false);
    document.addEventListener('mozfullscreenchange', onFullscreenExitHandler, false);
    document.addEventListener('MSFullscreenChange', onFullscreenExitHandler, false);
    document.addEventListener('webkitfullscreenchange', onFullscreenExitHandler, false);
}

function onFullscreenExitHandler() {
    if (
        document.webkitIsFullScreen === false ||
        document.mozFullScreen === false ||
        document.msFullscreenElement === false
    ) {

        document.getElementById("game-canvas-container").width = 1024;
        document.getElementById("game-canvas-container").width = 768;
    }
}

function saveFile(fileName, urlFile){
    let a = document.createElement("a");
    a.style = "display: none";
    document.body.appendChild(a);
    a.href = urlFile;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
}

function generateTestToSaveFile() {

    let textData = JSON.stringify({ lorem: "ipsum" });
    let blobData = new Blob([textData], {type: "application/json"});
    let url = window.URL.createObjectURL(blobData);
    saveFile('example.json', url);
}

function fetchVisuTracks() {
    return {
        "midbooze/distant-memory": "resources/visu/midbooze/distant-memory/visu.js",
        "selma-henerum/lets-revisit-our-time": "resources/visu/selma-henerum/lets-revisit-our-time/visu.js",
        "elon-nadie/vanished_thecn": "resources/visu/eldon-nadie/vanished_thecn/visu.js"
    };
}

const selectDOMObject = document.getElementById("visu-loader")
selectDOMObject.addEventListener("change", () => {
    const tracks = fetchVisuTracks();
    if (selectDOMObject.value in tracks) {
        console.log("Load", selectDOMObject.value);
        downloadSources(tracks[selectDOMObject.value])

        document.getElementById("visu-loader-div").remove();
        document.getElementById("visu-loading").style.display = "block";
    }
})


