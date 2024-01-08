export class TodoList {
    constructor(task, status){
        this.task = task
        this.status = status
        this.task_list = [{task : status}]
    }

    addTask(task, status) {
        return this.task_list.push({task: status});
    }

    markTask(status){
        let mark = "Complete"
        return this.task_list[status] = mark
    }
};