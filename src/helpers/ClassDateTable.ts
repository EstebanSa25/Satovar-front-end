export const ClassDateTable = (FechaFin: string | Date): string => {
    const difDays = Math.floor(
        (new Date(Date.now()).getTime() - new Date(FechaFin).getTime()) /
            (1000 * 3600 * 24)
    );
    if (difDays >= 0) {
        return 'table-danger';
    } else if (difDays >= -2) {
        return 'table-warning';
    } else {
        return 'table-success';
    }
};
