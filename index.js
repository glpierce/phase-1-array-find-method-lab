function superbowlWin(record) {
    let year = undefined;
    let winningSeason = record.find(element => element.result === `W`);
    if (winningSeason !== undefined) {
        year = winningSeason.year;
    }
    return year;
}
