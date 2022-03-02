const elements = document.getElementsByClassName('options');
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function () {
        let choice = elements[i].id;
        let res;

        choice == 'ROCK' ? res = '📃PAPER📃' : null
        choice == 'PAPER' ? res = '✂️SCISSORS✂️' : null
        choice == 'SCISSORS' ? res = '🗿ROCK🗿' : null

        const WorL = Math.floor(Math.random() * 2)
        if (WorL == 0) {
            choice == 'ROCK' ? res = '☹️📃PAPER📃☹️' : null
            choice == 'PAPER' ? res = '☹️✂️SCISSORS✂️☹️' : null
            choice == 'SCISSORS' ? res = '☹️🗿ROCK🗿☹️' : null
            document.getElementById('responseSpan').style.color = '#F91111'
            document.getElementById('responseSpan').style.fontWeight = 'bold'
            document.getElementById('responseSpan').textContent = res;
        }
        else {
            choice == 'ROCK' ? res = '🎉✂️SCISSORS✂️🎉' : null
            choice == 'PAPER' ? res = '🎉🗿ROCK🗿🎉' : null
            choice == 'SCISSORS' ? res = '🎉📃PAPER📃🎉' : null
            document.getElementById('responseSpan').style.color = '#2CE72E'
            document.getElementById('responseSpan').style.fontWeight = 'bold'
            document.getElementById('responseSpan').textContent = res;
        }

    }, false)
}