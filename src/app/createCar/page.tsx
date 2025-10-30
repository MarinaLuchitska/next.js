'use client'
import { createCarApi} from "@/services/cars.client";
import Form from "next/form";

export default function CreateCarPage() {
    async function saveCar(formData: FormData) {
        const car = {
            brand: String(formData.get('brand') ?? ''),
            price: Number(formData.get('price')) || undefined,
            year:  Number(formData.get('year')) || undefined,
        };

        await createCarApi(car);
        alert('Авто створено!');
        window.location.href = '/allCars';
    }

    return (
        <div style={{ padding: 16 }}>
            <Form action={saveCar} >
                <input type="text" name="brand" placeholder="brand" />
                <input type="number" name="price" placeholder="price" />
                <input type="number" name="year" placeholder="year" />
                <button type="submit">Save</button>
            </Form>
        </div>
    );
}
