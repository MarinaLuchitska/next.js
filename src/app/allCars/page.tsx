import { getAllCarsApi } from '@/services/api.service';
import { ICar } from '@/models/ICar';

export default async function CarsPage() {
    const cars: ICar[] = await getAllCarsApi();

    return (
        <main style={{ padding: 16 }}>
            <h1>Cars</h1>
            <ul>
                {cars.map((c) => (
                    <li key={c.id}>
                        {c.brand} — {c.price} — {c.year}
                    </li>
                ))}
            </ul>
        </main>
    );
}
