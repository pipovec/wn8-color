"use strict";

export function wn8color(wn8) {
    let color;
    if (wn8 <= 449) {
        color = 'grey';
    } else if (wn8 >= 450 && wn8 < 650) {
        color = '#e50000';
    } else if (wn8 >= 650 && wn8 < 849) {
        color = '#cd3333';
    } else if (wn8 >= 850 && wn8 < 1049) {
        color = '#d77900';
    } else if (wn8 >= 1050 && wn8 < 1249) {
        color = '#d7B600';
    } else if (wn8 >= 1250 && wn8 < 1399) {
        color = '#6d9251';
    } else if (wn8 >= 1400 && wn8 < 1599) {
        color = '#4c762e';
    } else if (wn8 >= 1600 && wn8 < 1999) {
        color = '#46a892';
    } else if (wn8 >= 2000 && wn8 < 2449) {
        color = '#4a92b7';
    } else if (wn8 >= 2450 && wn8 < 2849) {
        color = '#83579d';
    } else if (wn8 >= 2850) {
        color = '#5a3175';
    }

    return color;
}
export function winRateColor(wins) {
    let color;
    if (wins <= 46.99) {
        color = 'grey';
    } else if (wins >= 47 && wins < 48) {
        color = '#e50000';
    } else if (wins >= 48 && wins < 49) {
        color = '#cd3333';
    } else if (wins >= 49 && wins < 50) {
        color = '#d77900';
    } else if (wins >= 50 && wins < 51) {
        color = '#d7B600';
    } else if (wins >= 51 && wins < 52) {
        color = '#6d9251';
    } else if (wins >= 52 && wins < 53) {
        color = '#4c762e';
    } else if (wins >= 53 && wins < 56) {
        color = '#46a892';
    } else if (wins >= 56 && wins < 62) {
        color = '#4a92b7';
    } else if (wins >= 62 && wins < 67) {
        color = '#83579d';
    } else if (wins >= 67) {
        color = '#5a3175';
    }

    return color;
}