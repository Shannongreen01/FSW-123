import { v4 as uuidv4 } from 'uuid';

const todo = [
    {
        id: uuidv4(),
        text: "Go to grocery store",
        isCompleted: false
    },
    {
        id: uuidv4(),
        text: "Change oil",
        isCompleted: true,
    },
    {
        id: uuidv4(),
        text: "Finish laundry",
        isCompleted: false,
    },
    {
        id: uuidv4(),
        text: "Begin homework assignment",
        isCompleted: true,
    }
];

export default todo;
