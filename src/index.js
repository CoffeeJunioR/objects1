export default function orderByProps(someObj, propsQueue) {
    const arrayWithQueueProps = [];
    const arrayWithAlphabetedProps = [];
    arrayWithQueueProps.push(...propsQueue);
    for (const prop in someObj) {
        arrayWithAlphabetedProps.push(prop);
    }
    const supportArray = arrayWithAlphabetedProps.filter((prop) => !arrayWithQueueProps.includes(prop));
    supportArray.sort();
    const mainArray = [];
    mainArray.push(...arrayWithQueueProps, ...supportArray);
    const result = [];
    for (let i = 0; i < mainArray.length; i++) {
        result.push({key: mainArray[i], value: someObj[mainArray[i]]});
    }
    return result;
}