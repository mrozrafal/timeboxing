import uuid from 'uuid';


function wait(ms = 1000) {
    return new Promise(
        (resolve) => {
            setTimeout(resolve, ms);
        }
    )
}

const timeboxes = [
    { id: 1, title: "Uczę się robić listy komponentów", totalTimeInMinutes: 25 }
];

function findIndexByAnId(id) {
    const result = timeboxes.findIndex((timebox) => timebox.id == id)
    if (result < 0) {
        throw new Error("There is no Timebox with given ID")
    }
    return result;
}

const FakeTimeboxesAPI = {
    getAllTimeboxes: async function () {
        await wait(1000);

        return [...timeboxes]
    },
    addTimebox: async function (timeboxToAdd) {
        await wait(1000);
        const addedTimebox = { ...timeboxToAdd, id: uuid.v4() };
        timeboxes.push(addedTimebox);
        return addedTimebox;
    },
    replaceTimebox: async function (timeboxToReplace) {
        await wait(1000);
        if (!timeboxToReplace.id) {
            throw new Error("Cannot replace timebox without an id.")
        }
        const index = findIndexByAnId(timeboxToReplace.id);
        const replacedTimebox = { ...timeboxToReplace };
        timeboxes[index] = replacedTimebox;
        return replacedTimebox;
    },
    removeTimebox: async function (timeboxToRemove) {
        await wait(1000);
        if (!timeboxToRemove.id) {
            throw new Error("Cannot remove timebox without an id.")
        }
        const index = findIndexByAnId(timeboxToRemove.id);
        timeboxes.splice(index, 1);


    }

}
export default FakeTimeboxesAPI;