const todoFactory = (title, description, dueDate, priority, notes, check, project) => {

    return {title, description, dueDate, priority, notes, check, project}
}

export default todoFactory;