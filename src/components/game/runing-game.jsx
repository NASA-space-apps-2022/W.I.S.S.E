import { useState } from "react";
import "./dino-game/styles.css"

export default function game() {

    const [jump, setjump] = useState()

    const dino = document.getElementById("dino");
    const cactus = document.getElementById("cactus");

    function kkjump () {
        console.log("kk")
        if (dino.classList != "jump") {
            dino.classList.add("jump");

            setTimeout(function () {
            dino.classList.remove("jump");
            }, 300);
        }
    }

    let isAlive = setInterval(function () {
        // get current dino Y position
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

        // get current cactus X position
        let cactusLeft = parseInt(
             window.getComputedStyle(cactus).getPropertyValue("left")
        );

        // detect collision
        if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
            // collision
            alert("Game Over!");
        }
    }, 10);

// document.addEventListener("keydown", function (event) {
//   jump();
// });

    return (
        <div class="game" onClick={(e) => {jump
       }}>
            <div id="dino"></div>
            <div id="cactus"></div>
        </div>
    )
}