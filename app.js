document.getElementById('nupp').addEventListener('click', valiKeegi);

let summad = [0, 0, 0, 0, 0, 0];

const pere = ['Siim', 'Tuul', 'Säde', 'Hüüp', 'Aro', 'Kiur'];

function suurimListiVaartus(list) {
    let suurim = 0;
    list.forEach(arv => {
        if (arv > suurim) {
            suurim = arv;
        }
    });
    return suurim;
}

function suurimaIndeks(list) {
    for (let index = 0; index < list.length; index++) {
        if (list[index] === 10) {
            return index;
        }
    }
}

// Tekitame nupu uuesti mängimiseks, mis tekib mängu lõppedes.
const nuppMangiUuesti = document.createElement('button');
nuppMangiUuesti.className = 'btn waves-effect waves-light green';
nuppMangiUuesti.id = 'mangiuuesti';
nuppMangiUuesti.appendChild(document.createTextNode('Mängi uuesti'));
nuppMangiUuesti.onclick = () => location.reload();


function valiKeegi() {

    document.querySelector('.vooru-voitja').style.visibility = 'visible';
    document.querySelector('.skoor').style.visibility = 'visible';

    if (suurimListiVaartus(summad) !== 10) {

        const randNum = Math.floor(Math.random() * 6 + 1) - 1;
        const voitja = pere[randNum];

        switch (voitja) {
            case 'Siim':
                summad[0]++;
                break;
            case 'Tuul':
                summad[1]++;
                break;
            case 'Säde':
                summad[2]++;
                break;
            case 'Hüüp':
                summad[3]++;
                break;
            case 'Aro':
                summad[4]++;
                break;
            case 'Kiur':
                summad[5]++;
                break;
            default:
                break;
        }

        document.getElementById('voitja').innerHTML = `<h3>${voitja}</h3>`;

        document.getElementById('siim').innerHTML = `<h5>Siim: ${summad[0]}</h5>`;
        document.getElementById('tuul').innerHTML = `<h5>Tuul: ${summad[1]}</h5>`;
        document.getElementById('sade').innerHTML = `<h5>Säde: ${summad[2]}</h5>`;
        document.getElementById('huup').innerHTML = `<h5>Hüüp: ${summad[3]}</h5>`;
        document.getElementById('aro').innerHTML = `<h5>Aro: ${summad[4]}</h5>`;
        document.getElementById('kiur').innerHTML = `<h5>Kiur: ${summad[5]}</h5>`;

        if (suurimListiVaartus(summad) === 10) {
            // Näite võitja cardi.
            document.querySelector('.mangu-voitja').style.visibility = 'visible';
            let i = suurimaIndeks(summad);
            document.getElementById('mangu-voitja').innerHTML = `<h2>Võitis ${pere[i]}</h2>`;

            nupp.disabled = true;
            document.querySelector('.card-panel').appendChild(nuppMangiUuesti);


        }

    }


}

