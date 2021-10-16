export default class Task {
    #description = 0;
    #from = 0;
    #to = 0;
    #hoursSpent = 0;

    constructor(description, from, to) {
        this.#description = description;
        this.#from = from;
        this.#to = to;

        let fromInMinutes = this.from.split(":");
        let toInMinutes = this.to.split(":");
        let hoursSpent;

        fromInMinutes = parseInt(fromInMinutes[0]) * 60 + parseInt(fromInMinutes[1]);
        toInMinutes = parseInt(toInMinutes[0]) * 60 + parseInt(toInMinutes[1]);
        hoursSpent = (toInMinutes - fromInMinutes) / 60;

        this.#hoursSpent = Math.round(hoursSpent * 100) / 100;
    }

    get description() {
        return this.#description;
    }

    set description(value) {
        this.#description = value;
    }

    get from() {
        return this.#from;
    }

    set from(value) {
        this.#from = value;
    }

    get to() {
        return this.#to;
    }

    set to(value) {
        this.#to = value;
    }

    get hoursSpent() {
        return this.#hoursSpent;
    }

    set hoursSpent(value) {
        this.#hoursSpent = value;
    }
}