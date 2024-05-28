export default function createIteratorObject(report) {
    const employes = [];
    for (const departmentEmployees of Object.values(report.allEmployees)) {
        employes.push(...departmentEmployees);
    }
    return employes;
}