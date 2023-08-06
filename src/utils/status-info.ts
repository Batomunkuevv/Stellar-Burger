const getStatusInfo = (status: "done" | "created" | "pending") => {
    switch (status) {
        case "done":
            return "Выполнен";
        case "created":
            return "Создан";
        case "pending":
            return "Готовится";
        default:
            return status;
    }
};

export default getStatusInfo;
