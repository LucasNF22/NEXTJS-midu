import { fetchRevenue } from "../lib/data"

export default async function DashboardPage() {

    const reveneu = await fetchRevenue();

    console.log(reveneu);
    

    return <p>Esta es la pagina del dashbaord</p>
}