document.addEventListener('DOMContentLoaded', () => {
    let date = new Date('Jul 24 2023 00:00:00');
    function counts() {
        let now = new Date();
        gap = date - now;
        console.log(gap);

        let days = Math.floor(gap / 1000 / 60 / 60/ 24);
        let hours = Math.floor(gap / 1000 / 60 / 60 ) % 24;
        let minutes = Math.floor(gap / 1000 / 60 ) % 60;
        let seconds = Math.floor(gap / 1000 ) % 60;
        console.log(days);

        if (gap < 0) {
            document.getElementById('group').innerText = 'Время вышло';
        }else{
            document.getElementById('d').innerText = days;
            document.getElementById('h').innerText = hours;
            document.getElementById('m').innerText = minutes;
            document.getElementById('s').innerText = seconds;
        }}
        counts();
        
        setInterval(counts, 1000);
});