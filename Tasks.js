export default class Tasks {
    #tasks = [];

    constructor(tasks = []) {
        this.#tasks = tasks;
    }

    get tasks() {
        return this.#tasks;
    }

    set tasks(value) {
        this.#tasks = value;
    }

    totalHoursSpent() {
        let totalHoursSpent = 0;

        this.tasks.forEach(task => {
            totalHoursSpent += task.hoursSpent;
        });

        return Math.round(totalHoursSpent * 100) / 100;
    }

    addTask(task) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].description.toLowerCase() === task.description.toLowerCase()) {
                let timeSum = this.tasks[i].hoursSpent + task.hoursSpent;

                this.tasks[i].hoursSpent = Math.round(timeSum * 100) / 100;
                return;
            }
        }
        this.tasks.push(task);
    }
}