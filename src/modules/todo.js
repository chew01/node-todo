const todoFactory = (title, description, dueDate, priority, notes, check) => {

    return {title, description, dueDate, priority, notes, check}
}

export default todoFactory;