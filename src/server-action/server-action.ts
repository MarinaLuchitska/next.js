'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function saveCar(formData: FormData) {
    const car = {
        brand: String(formData.get('brand') ?? '').trim(),
        price: Number(formData.get('price') ?? 0),
        year: Number(formData.get('year') ?? 0),
    };

    await fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(car),
        cache: 'no-store',
    });

    revalidatePath('/allCars');
    redirect('/allCars');
}
