import { document } from "../utils/dynamodbClient";
import { v4 as uuidv4 } from "uuid";

interface ICreateTodo {
    title: string;
    date: string;
}



export const handle = async (event) => {
    const { user_id } = event.pathParameters;
    const { title, date } = JSON.parse(event.body) as ICreateTodo;
    const id = uuidv4()
    const deadline = new Date(date)


    await document.put({
        TableName: "users_todos",
        Item: {
            user_id,
            id,
            title,
            done: false,
            deadline
        }
    }).promise()

    const response = {
            user_id,
            id,
            title,
            done: false,
            deadline
    }

    console.log(response)

    return {
        statusCode: 201,
        body: JSON.stringify(response),
        headers: {
            "Content-type": "application/json"
        },
    };

}