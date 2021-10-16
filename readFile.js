/*import Task from "./Task";*/

let cleanString = string => string.replace(/\s\s+|\r/g, ' ').trim();

document.onreadystatechange = function () {

    if (document.readyState === "interactive") {
        // do something here...
        Promise.all([
            import('./Task'),
            import('./Tasks')
        ])
            .then(([taskModule, tasksModule]) => {
                console.log("All modules loaded successfully");
                var Task = taskModule.default;
                var Tasks = tasksModule.default;
                var tasks = new Tasks();

                document.getElementById('file').onchange = function () {
                    var file = this.files[0];
                    var tasksElement = document.getElementById("tasks");
                    var reader = new FileReader();

                    reader.onload = function (progressEvent) {
                        // By lines
                        var lines = this.result.split('\n');
                        for (var line = 0; line < lines.length; line++) {
                            if (lines[line+2]) {
                                let from = lines[line];
                                line++;
                                let issue = lines[line];
                                line++;
                                let to = lines[line];
                                line--;
                                let task = new Task(cleanString(issue), cleanString(from), cleanString(to));
                                tasks.addTask(task);
                            }
                        }
                        console.log("TotalHours: ", tasks.totalHoursSpent());
                        tasks.tasks.forEach((task) => {
                            console.log(task.hoursSpent, " - ", task.from, task.to, task.description);
                            let div = document.createElement("div");
                            div.append(task.hoursSpent + " - " + task.description);
                            tasksElement.appendChild(div);
                        });
                        let div = document.createElement("div");
                        div.append(tasks.totalHoursSpent());
                        tasksElement.appendChild(div);
                    };
                    reader.readAsText(file);
                };
            })
            .catch((error) => {
                console.log("Failed to load Task module");
            });
    }
};

