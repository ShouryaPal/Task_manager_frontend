import axios from 'axios'

const baseUrl = "https://alive-elk-pumps.cyclic.app";

const getAllTask = (setTask) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data ---> ', data);
            setTask(data)
        })
}

const addTask = (text, setText, setTask) => {

    axios
        .post(`${baseUrl}/save`, { text })
        .then((data) => {
            console.log(data);
            setText("")
            getAllTask(setTask)
        })
        .catch((err) => console.log(err))

}

const updateTask = (taskId, text, setTask, setText, setIsUpdating) => {

    axios
        .post(`${baseUrl}/update`, { _id: taskId, text })
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllTask(setTask)
        })
        .catch((err) => console.log(err))

}

const deleteTask = (_id, setTask) => {

    axios
        .post(`${baseUrl}/delete`, { _id })
        .then((data) => {
            console.log(data)
            getAllTask(setTask)
        })
        .catch((err) => console.log(err))

}


export { getAllTask, addTask, updateTask, deleteTask }