const keys = document.querySelectorAll(".key")
const leds = document.querySelectorAll(".light")
const audio = new Audio('key_soundC.mp3');
audio.volume = 0.2;

document.addEventListener('keydown', actKey)
document.addEventListener('keyup', desactKey);

function actKey(e) {
    if (!e.metaKey) {
        e.preventDefault();
      }
    for (const key of keys) {
        if (e.code == key.getAttribute('data-key')) {
            key.classList.add('active');
            audio.play();
            switch (key.getAttribute('data-key')) {
                case "ScrollLock":
                    leds[2].classList.toggle('lightAct')
                    break;
                case "CapsLock":
                    leds[1].classList.toggle('lightAct')
                    break;
                case "NumLock":
                    leds[0].classList.toggle('lightAct')
                    break;
            }
        }
    }   
}
function desactKey(e){
    for (const key of keys) {
        if (e.code == key.getAttribute('data-key')) {
            key.classList.remove('active');
        }
    }
}

function getYear() {
    let date = new Date();
    let text = `© copyright ${date.getFullYear()} - Jeison Daza`;
    document.querySelector('.copyright').textContent = text;
}
getYear();