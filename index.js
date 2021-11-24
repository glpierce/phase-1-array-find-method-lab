function superbowlWin(record) {
    const winningSeason = record.find(element => element.result === `W`);
    if (winningSeason !== undefined) {
        return winningSeason.year;
    } else {
        return undefined;
    }
}
