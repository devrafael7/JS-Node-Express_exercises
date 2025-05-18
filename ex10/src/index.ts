// Creating a Type for Task
/*
type Task = {
    content: string;
    done: boolean;
}

let tasks: Task[] = [];

function AddTask(content: string) : void {
    if (content.trim() !== ""){
        tasks.push( {content, done: false} );
        console.log(`Task has added to to-do list! task:${content}`);
    }
}

function MarkAsDone(index: number) : void {
    if (tasks[index]) {
        tasks[index].done = !tasks[index].done;
        const status = tasks[index].done ? `Task has done!` : `Task not done`;
        console.log(`Task "${tasks[index].content}" marked as ${status}`);
    } else {
        console.log('Invalid index!');
    }
}

function DeleteTask(index : number) : void{
    if (tasks[index]) {
        console.log(`Deleting: "${tasks[index].content}"`);
        tasks = tasks.filter((_, i) => i !== index);
    } else {
        console.log('Invalid index!');
    }
}

function ShowTasks(): void{
    console.log('\n To-do list:');
    tasks.forEach((task, i) => {
        const status = task.done ? "Done" : "Not Done";
        console.log(`${i}. ${status} ${task.content}`);
    });
    console.log('');
}

AddTask('Study next.js');
AddTask('Wash my hair');
AddTask('Clean my computer desk');

ShowTasks();

MarkAsDone(0);
DeleteTask(2);

ShowTasks();


*/